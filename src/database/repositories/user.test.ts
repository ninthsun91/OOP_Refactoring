import Users from '../models/user';
import User from './user';

jest.mock('../models/user');

describe('test User repository', () => {
    test('should return user if user exists', ()=>{}, 1);

    test('should return null if user doesn\'t exist', ()=>{}, 1);

    test('should return query result if a new user created', ()=>{}, 1);
});