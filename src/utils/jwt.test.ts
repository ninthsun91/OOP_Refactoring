import jwt from './jwt';
import { PayloadI } from "../interfaces/interface"


const payload: PayloadI = {
    userId: 1,
    nickname: "test"
}

describe('test accessToken', ()=>{
    let accessToken: string;

    test('should return token if success', () => {
       accessToken = jwt.sign(payload);
       expect(typeof accessToken).toBe("string");
    });

    test('should return the exact payload if token is valid', () => {
        const result = jwt.verify(accessToken)!;
        if (typeof result === 'object') {
            expect(result['userId']).toBe(payload.userId);
            expect(result.nickname).toBe(payload.nickname);
        }        
    });
    test('should return null if token is invalid', () => {
        const result = jwt.verify('randomtoken');
        expect(result).toBe(null);
    });
});


describe('test refreshToken', ()=>{
    let refreshToken: string;

    test('should return refreshToken if success', () => {
        refreshToken = jwt.refresh();
        expect(typeof refreshToken).toBe('string');
    });
    
    test('should return true', () => {
        const result = jwt.refreshVerify(refreshToken);
        if (typeof result === 'object') {
            expect(result).toBeTruthy();
        }
    });
    test('should return null if token in invalid', () => {
        const result = jwt.refreshVerify('refreshtoken');
        expect(result).toBe(null);
    });
});