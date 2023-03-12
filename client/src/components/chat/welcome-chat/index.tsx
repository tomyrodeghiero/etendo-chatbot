import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const WelcomeChat = () => {
  const [currentInstruction, setCurrentInstruction] = useState(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState<any>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "user", message: `${input}` }]; // Se agrega el mensaje del usuario al chatLog
    setInput(""); // Se limpia el input
    setChatLog(chatLogNew); // Se actualiza el chatLog
    /* fetch response to the API combining the chat log array of messages and sending
    it as a message to localhost:4000 as a post */
    const messages = chatLogNew.map((message) => message.message).join("\n");

    const response: any = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    let data: any = await response.json();
    console.log("data", data);
    const chatbotMessage = JSON.parse(data).message;
    let chatLogNewWithChatbotMessage = [
      ...chatLogNew,
      { user: "chatbot", message: chatbotMessage },
    ]; // Se agrega el mensaje del chatbot al chatLog
    console.log("chatLogNewWithChatbotMessage", chatLogNewWithChatbotMessage);
    setChatLog(chatLogNewWithChatbotMessage); // Se actualiza el chatLog con el mensaje del chatbot
  };

  const instructions = [
    {
      icon: "/assets/icons/alert.png",
      instruction:
        "Aunque contamos con medidas de protección, el sistema puede generar ocasionalmente información incorrecta o engañosa y producir un contenido erróneo. No se pretende dar consejos.",
    },
    {
      icon: "/assets/icons/robot.png",
      instruction:
        "Las conversaciones pueden ser revisadas por nuestro equipo de AI para mejorar nuestro sistema. Así que, por favor, no compartas información sensible en tus conversaciones.",
    },
    {
      icon: "/assets/icons/like.png",
      instruction:
        "Nuestro bot está optimizado para entablar un diálogo. Haznos saber si una respuesta en particular fue buena o mala haciendo click en los botones de like o dislike. Si tienes algún comentario para ayudarnos. ¡Escríbenos!",
    },
  ];

  const handleNextInstruction = () => {
    if (currentInstruction < instructions.length) {
      setCurrentInstruction(currentInstruction + 1);
    } else {
      setShowInstructions(false);
    }
  };

  return (
    <>
      <div className="h-[90%] w-full p-5">
        {showInstructions ? (
          <div className="w-full rounded-lg bg-white px-6 py-3 leading-[1.6rem]">
            <h2 className="font-medium text-blue-900">
              ¡Bienvenido a nuestro ChatBot!
            </h2>
            <p className="text-[0.9rem] text-gray-600">
              Nuestro objetivo es responder a todas tus preguntas sobre las
              características de Etendo.
            </p>

            <div className="mt-3 h-full w-full rounded-lg border border-gray-300">
              {instructions.slice(0, currentInstruction).map((instruction) => (
                <div
                  key={instruction.instruction}
                  className="flex items-center border-b border-gray-300"
                >
                  <div className="flex items-center gap-4 py-3 px-5">
                    <img
                      className="h-4"
                      src={instruction.icon}
                      alt="Etendo Logotype"
                    />
                    <p
                      className="text-[0.9rem] leading-5 text-gray-600"
                      key={instruction.instruction}
                    >
                      {instruction.instruction}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex w-full justify-end">
                <button
                  id="comenzar-btn"
                  onClick={handleNextInstruction}
                  className={`my-3 mx-5 rounded px-4 pb-[0.35rem] pt-[0.35rem] text-[0.9rem] ${
                    currentInstruction < instructions.length
                      ? "bg-gray-200 text-blue-700"
                      : "bg-blue-700 text-white"
                  }`}
                >
                  {currentInstruction < instructions.length
                    ? "Siguiente"
                    : "¡Comenzemos!"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {chatLog.map((message: any, index: number) => {
              console.log("message", message);
              return <div>{message.message}</div>;
            })}
          </div>
        )}
      </div>

      <div className="h-[10%] w-full">
        <div className="relative mx-5">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full rounded-lg bg-white py-3 pl-5 pr-16 placeholder-gray-400 outline-none focus:shadow"
              type="text"
              placeholder="Escribe algo..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <div className="absolute top-0 right-0 flex h-full cursor-pointer items-center gap-2 pr-5">
              <img
                className="h-[0.65rem]"
                src="/assets/icons/send-arrow.png"
                alt="Etendo Logotype"
              />
              <span className="text-sm text-gray-600">Enviar</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WelcomeChat;
