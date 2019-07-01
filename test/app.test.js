import app from '../src/app';

app();

describe('Simple node app', () => {
  it('should console.log', done => {
    app();
    done();
  });
});
