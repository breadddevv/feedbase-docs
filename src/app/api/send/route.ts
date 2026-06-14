import { Resend } from "resend"
import { WaitlistConfirmation } from "@/emails/component"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 })
  }

  await resend.contacts.create({
    email, unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  })

  await resend.emails.send({
    from: "Feedbase Team <hello@feedbase.breaddevv.cc>",
    to: email,
    subject: "🎊 You're on the list!",
    react: WaitlistConfirmation({ email }),
  })

  return Response.json({ success: true })
}