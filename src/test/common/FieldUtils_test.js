import { sanitizeValue } from '../../common/FieldUtils';

describe('FieldУtils', () => {
  describe('#santizeValue', () => {
    describe('When provide a string value', () => {
      it('returns sanitised result', () => {
        expect(sanitizeValue('a1234a', '[0-9]')).toBe('1234');
      });
    });
    describe('When provides an empty value', ()=>{
      it('returns empty string', () => {
        expect(sanitizeValue('', '[0-9]')).toBe('');
      });
    });
    describe('When provides a null', () => {
      it('returns empty string', () => {
        expect(sanitizeValue(null, '[0-9]')).toBe('');
      });
    });
    describe('When provides a undefined', () => {
      it('returns empty string', () => {
        expect(sanitizeValue(undefined, '[0-9]')).toBe('');
      });
    });
    describe('When provides regexp as null', ()=>{
      it('Throws error', () => {
        expect(() => {
          sanitizeValue('', null);
        }).toThrow(new Error('regex must not be null'));
      });
    });
    describe('When provides regexp as undefined', ()=>{
      it('Throws error', () => {
        expect(() => {
          sanitizeValue('', undefined);
        }).toThrow(new Error('regex must not be null'));
      });
    });
  });
});
