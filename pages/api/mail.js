import { resolveHref } from "next/dist/next-server/lib/router/router";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEYs);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Navn: ${body.name} \r\n
    Mail: ${body.email} \r\n
    Telefonnummer: ${body.telefon} \r\n
    Besked: ${body.description} \r\n
  `;

  try {
    await mail.send({
      to: "julian@go-work.dk",
      from: "kontakt@go-work.dk",
      subject: `Mail sendt gennem hjemmesiden. Afsender: ${body.email}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(error.code).send({ message: "Kunne ikke sende mail. Prøv venligst igen eller kontakt os på 66 10 65 00." });
  }
}
