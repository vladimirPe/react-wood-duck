import { sanitizeValue } from "../../common/FieldUtils";

describe('Field utils', () => {
  describe('Sanitize Value', ()=>{
    it('Value not null', () => {
      expect(sanitizeValue('a1234a', "[0-9]")).toBe('1234');
    });

    it('Value is empty', () => {
      expect(sanitizeValue('', "/[0-9]/")).toBe('');
    });

    it('Value is null', () => {
      expect(sanitizeValue(null, "/[0-9]/")).toBe('');
    });

    it('Regex null', () => {
      expect(() => { sanitizeValue('', null) }).toThrow(new Error('regex must not be null'));
    });
  });
});

