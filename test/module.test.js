var expect = require('expect');
var server = require('../server');

describe('Array Sum', () => {
    it('should exists', () => {
        var arr = [1];
        var arraySum = server.SumArray(arr);
        expect(arraySum).toBeTruthy();
    });

    it('should return a the sum of the array', () => {
        var arr = [1,2,3,4,5]
        var arraySum = server.SumArray(arr);
        expect(arraySum).toBe(15);
    });
}); 

describe('Array Average', () => {
    it('should exists', () => {
        var arr = [1];
        var res = server.AverageArray(arr);
        expect(res).toBeTruthy();
    });

    it('should return the average of the array', () => {
        var arr = [1,2,3,4,5]
        var res = server.AverageArray(arr);
        expect(res).toBe(3);
    });
}); 

describe('Array Minimum', () => {
    it('should exists', () => {
        var arr = [1];
        var res = server.MinArray(arr);
        expect(res).toBeTruthy();
    });

    it('should return the minimun value of the array', () => {
        var arr = [1,2,3,4,5]
        var res = server.MinArray(arr);
        expect(res).toBe(1);
    });
}); 


describe('Array Maximum', () => {
    it('should exists', () => {
        var arr = [1];
        var res = server.MaxArray(arr);
        expect(res).toBeTruthy();
    });

    it('should return the maximum value of the array', () => {
        var arr = [1,2,3,4,5]
        var res = server.MaxArray(arr);
        expect(res).toBe(5);
    });
}); 

describe('Unique Array', () => {
    it('should exists', () => {
        var arr = [1];
        var res = server.UniqArray(arr);
        expect(res).toBeTruthy();
    });

    it('should return the Unique array', () => {
        var arr = [1,2,3,4,5,1,2,3,4,5,6]
        var res = server.UniqArray(arr);
        expect(res).toEqual([1,2,3,4,5,6]);
    });
}); 

describe('Unique Array Sort', () => {
    it('should exists', () => {
        var arr = [1];
        var res = server.UniqArraySort(arr);
        expect(res).toBeTruthy();
    });

    it('should return the Unique array', () => {
        var arr = [6,5,1,2,3,4,5,1,2,3,4,5,6]
        var res = server.UniqArraySort(arr);
        expect(res).toEqual([1,2,3,4,5,6]);
    });
});

describe('Unique String Array', () => {
    it('should exists', () => {
        var arr = ["hello"];
        var arraySum = server.UniqStringArray(arr);
        expect(arraySum).toBeTruthy();
    });

    it('should return the Unique array', () => {
        var arr = ["Zoo","Add","Node","Add"]
        var arraySum = server.UniqStringArray(arr);
        expect(arraySum).toEqual(["Add","Node","Zoo"]);
    });
});