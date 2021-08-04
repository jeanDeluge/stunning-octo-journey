import request from 'supertest'
import app from '../src/app'
import jwt from 'jsonwebtoken'

const token = jwt.sign(
  {
    sub: '1234',
    roles: [
      {
        no: 42524,
        name: 'BASIC_USER',
      },
    ],
    iat: 1621932534,
    exp: 1622537334,
  },
  process.env.JWT_SECRET,
)

describe('Server Availability', () => {
  test('루트 응답', async (done) => {
    const response = await request(app.callback()).get('/')
    expect(response.status).toEqual(200)
    done()
  })
})

afterAll((done) => {
  done()
})
