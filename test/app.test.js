import app from '../lib/app';

app();

describe('Simple node app', () => {
  it('should console.log', done => {
    app();
    done();
  })
})
