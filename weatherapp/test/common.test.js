let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Test my APi ', () => {
    it('should return status as 200 for /health', function(done){
        chai
            .request('http://localhost:3500')
            .get('/health')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw (err);
            });
    })
    it('should return status as 200 for /health', function(done){
        chai
            .request('http://localhost:3500')
            .get('/aakash')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw (err);
            });
    })
})