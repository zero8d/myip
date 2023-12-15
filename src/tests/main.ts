import app from '../app'
import request from 'supertest'

describe('GET /', () => {
  it('should return ::1 loopback', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('::ffff:127.0.0.1')
  })
})
