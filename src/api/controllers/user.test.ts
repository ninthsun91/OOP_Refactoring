import { Request, Response, NextFunction } from 'express';
import request from 'supertest';
import User from './user';

// interface req {
//     body?: object;
//     headers?: object;
//     params?: object;
// }

// interface res {
//     status
// }

describe('test /signup', ()=>{
    const req = {
        body: {
            nickname: '',
            password: '',
            confirm: ''
        }
    }
    const res  = {
        status: jest.fn()
    }
    test('test signup', (done)=>{
        // User.signup(req, res, next)
        
    }, 1);
});

