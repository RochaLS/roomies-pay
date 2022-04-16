import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ], callbacks : {
     async session({ session }) {
       console.log(session)
        return session
      }
  }
})
