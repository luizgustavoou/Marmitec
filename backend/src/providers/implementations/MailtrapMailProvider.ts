import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMAilProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fee64ae2afd078",
        pass: "b1d2e79bc24f5b",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      // to: {
      //     name: message.to.name,
      //     adress: message.to.email
      // },
      // from: {
      //     name: message.from.name,
      //     adress: message.from.email
      // },
      from: `'${message.from.name}' <${message.from.email}>`,
      to: `'${message.to.name}' <${message.to.email}>`,
      subject: message.subject,
      html: message.body,
    });
  }
}
