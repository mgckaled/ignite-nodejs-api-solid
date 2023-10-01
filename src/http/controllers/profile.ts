import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify()

  console.log(request.user.sub)
  console.log(request.headers)

  return reply.status(200).send()
}
