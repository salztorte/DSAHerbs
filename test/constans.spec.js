"use strict";
/**
 * Created by Oliver on 22.01.2016.
 */
import expect from 'expect';
import {keyMirror} from '../src/config/constans'

describe("tests keyMirror", function() {
    it("should create a Json ou of Array", function(){
        let result = keyMirror([1,2,3,4,5]);
        expect(result).toEqual({1:1,2:2,3:3,4:4,5:5});
    });
});