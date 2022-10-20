import request from 'supertest';
import App from './app';

describe('test /', ()=>{
    test('should return \'TEST SUCCESS\'', (done)=>{
        request(App.app).get('/').then((response)=>{
            expect(response.text).toEqual('success');
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    test('async/await', async()=>{
        const response = await request(App.app).get('/')
        expect(response.text).toBe('success')
    });

    test('should return 404 error if wrong endpoint', (done)=>{
        request(App.app).get('/unknown').then((response)=>{            
            expect(response.statusCode).toEqual(404);
            expect(response.body.message).toBe('PAGE NOT FOUND');
            done();
        });
    });
});