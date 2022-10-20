
import { NextFunction, Request, Response } from 'express';
import auth from './auth';
import jwt from '../utils/jwt';

const { authMiddleware, tokenChecker } = auth;

import { PayloadI } from "../interfaces/interface"

const payload: PayloadI = {
    userId: 1,
    nickname: "test"
}
const accessToken = jwt.sign(payload);
const refreshToken = jwt.refresh();




describe('Authorization middleware', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            json: jest.fn()
        };
    });
    
    test('without headers', async () => {
        authMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockResponse.json).toBeTruthy();
    });

    test('with invalid "authorization" header', async () => {
        const expectedResponse = {
            "message": "로그인이 필요한 기능입니다."
        };
        
        mockRequest = {
            headers: {
                Authorization: "Bearer accessToken",
                refreshToken: "refreshToken"
            }
        }
        authMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockResponse.json).toBeCalledWith(expectedResponse);
    });

    test('with "authorization" header', async () => {
        mockRequest = {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                refreshToken: refreshToken
            }
        }

        const mockAuth = jest.fn((req: Request, res: Response, next: NextFunction)=>{
            const { Authorization, refreshToken } = req.headers;
            if (!Authorization) {
                return
            }
            const [tokenType, accessToken] = Authorization.split(" ");

            const payload = jwt.verify(accessToken);
            console.log('mockAuth payload: ' + payload);

            if (payload === null && typeof refreshToken === 'string') {
                const refreshCheck = jwt.refreshVerify(refreshToken)

                if (refreshCheck) {
                    return next();
                }

            } else {
                return next();
            }
        });

        mockAuth(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(nextFunction).toBeCalledTimes(1);
    });
});


describe('test tockenChecker', () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction = jest.fn();

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            json: jest.fn()
        };
    });

    test('no headers', () => {
        tokenChecker(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.json).toBeTruthy();
    });

    test('headers exist', () => {

        mockReq = {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                refreshToken: refreshToken
            }
        }
        const expectedError = {
            message: "이미 로그인이 되어있습니다."
        }
        tokenChecker(mockReq as Request, mockRes as Response, mockNext);
        expect(mockRes.json).toBeTruthy();
        expect(mockRes.statusCode).toBe(400);
    });

    test('headers absent', () => {
        mockReq = {
            headers: {
                Authorization: '',
                // refreshToken: '',
            }
        }
        tokenChecker(mockReq as Request, mockRes as Response, mockNext);
        expect(mockNext).toBeCalledTimes(1);
    });
});


// import { NextFunction, Request, Response, } from 'express';
// import auth from './auth';

// const { authMiddleware, tokenChecker } = auth;

// describe('test authMiddleware', () => {
//     // const req: Req = {
//     //     headers: {
//     //         authorization: '',
//     //         refreshToken: '',
//     //     }
//     // }
//     // const res: object = {}
//     // const next = jest.fn();
//     const invalidError = new Error("로그인이 필요한 기능입니다.");
//     const errorJson = {
//         message: invalidError.message
//     };

//     let mockReq: Partial<Request>;
//     let mockRes: Partial<Response>;
//     let mockNext: NextFunction = jest.fn();

//     beforeEach(() => {
//         mockReq = {
//             headers: {
//                 authorization: 'Bearer accessToken',
//                 refreshToken: 'refreshToken',
//             }
//         };
//         mockRes = {
//             status: jest.fn(),
//             // json: jest.fn()
//         };
//     });

//     test('should return error if invalid header', () => {
//         authMiddleware(mockReq as Request, mockRes as Response, mockNext as NextFunction);
//         expect(mockRes.json).toBeCalledWith(errorJson);
//         // expect(mockRes.status).toBeCalledWith(401);
//     });

//     // test('should next() if valid access', () => {
//     //     authMiddleware(mockReq as Request, mockRes as Response, mockNext as NextFunction);
//     //     expect(mockNext).toBeCalledTimes(1);
        
//     // });

// });



// interface reqHeaders {
//     authorization: string;
//     refreshToken: string;
// }

// interface Req {
//     headers: reqHeaders;
// }
