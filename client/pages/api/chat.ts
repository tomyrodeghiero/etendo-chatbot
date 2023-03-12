import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest | any,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "route-ui=Fe26.2*1*d5eb04baaaf86d6c73eb9c123f3c6dea787f1eded7757d94467c5b7d00e02760*qu5fNCLE_979TspOBx29Dg*Hwf5yAjqDkzRsCiZpsg8aFmmoaIdfgUs2VYgPZp_AgiyMYqJYKWGfHspt_marGutiMuQZubrp8-xrWqyAyMV123msGS59tsbH48zzHxv8x-czn29AFFFrp734H7_j5KfqcRJOs-IoZKMnd4aiaEHhFkf4yNRRN7Ej0PdLBy2QIImWV2NndsXA5Du8_DGQCQ0-nhdCoOMOGX6L7FI_voNv8dIuvZpJ_nj3hpcj_J8BZqWSKU1kQG6YDXVIC-lqtnNy2fa-Y8QUi3D9Kj60KMBIf75ec9EiFjNNkbnmTQPbXkVDcMX_RRxP_f-x1VeZtgXuqFL7PwCjz4PmxSA_ZBsv7_mdGAWjUne6bEOagyZE0zHpSi8J0BzIzRQ1xx-Cd0KnGLme3Aq0O_eWRwY2SaGzNUb9tfDhRTwkyUPmHE-K9eOuQmWuH2SKbHks7yLNbjMqKKcgQ6sojiZbFNYmhE5EdKnt_NyDI9Q4nkFT-j3QuVw-2ZGMovAdVpAFCMdLLOW8DHEwSFvL8VZjPDvF2Yit7SZt56tYDpjgplxeM3Y7g-jUCsmL-wYXqDUt6Vzt3YmSEwRt6k_WuwjmSL45BdMWOg-D-0GYUvIIYvBIFuaviUHqou8aGFTLeYfPnUIhxmBhIsCrh_M4QsxgJ9qAPVvBMiTSq6h33RvxrfeI45LWI0xPpcqAM0tIOyUDfLgKWB0ISP5bpj4e7j2rPfpQXiJIrQS22CMk50ylNRT4C54kax13B7naDzSfkxLztoC0H5SCVU0IFtgdGpesIFhbOG0mukDB_9Dux62nWya7gtZ1FulDErqyCYg66IRM369MzeEXzfbD4mvPvq9UV5ilrDqMD0kKIUWcbA-yD1wRO4WIYXmluBB5VX-Bb1F-qal-kFHwdpLgVQUW3Uie_Jk0i_fL-VKeUwJlyPWJZxt1_vqO_0b3BglVleQqrXbTAsnQrbQ*1678896514368*9ab94a4e19251c9c000430fe373c097d487562714a5f99890439695887dba16f*N4atqDHczev531IQ6g6EShVfut9k11u0AXBefdbN9Mc~2"
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      message: req.body.message,
    });

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:4000/api/chat", requestOptions)
      .then((response) => response.text())
      .then((result) => res.status(200).json(result))
      .catch((error) => console.log("error", error));
  } else {
    res.status(405);
  }
}
