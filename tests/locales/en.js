// Node
if (typeof module !== "undefined" && module.exports) {
  var numeral = require("../../numeral");
  var locales = require("../../locales");
  var expect = require("chai").expect;
}

const preciseRound = (value, decimals = 0, base = 10) => {
  const pow = Math.pow(base, decimals);
  return Math.round(value * pow) / pow;
};

describe("Locale: en (en-US)", function () {
  before(function () {
    numeral.locale("en");
  });

  after(function () {
    numeral.reset();
  });

  describe("Number", function () {
    it("should format a number", function () {
      var tests = [
        [10000, "0,0.0000", "10,000.0000"],
        [10000.23, "0,0", "10,000"],
        [-10000, "0,0.0", "-10,000.0"],
        [10000.1234, "0.000", "10000.123"],
        [-10000, "(0,0.0000)", "(10,000.0000)"],
        [-0.23, ".00", "-.23"],
        [-0.23, "(.00)", "(.23)"],
        [0.23, "0.00000", "0.23000"],
        [1230974, "0.0a", "1.2m"],
        [1460, "0a", "1k"],
        [-104000, "0a", "-104k"],
        [1, "0o", "1st"],
        [52, "0o", "52nd"],
        [23, "0o", "23rd"],
        [100, "0o", "100th"],
        [1, "0[.]0", "1"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1])).to.equal(tests[i][2]);
      }
    });

    it("should format a number with edge cases", function () {
      var tests = [
        [10, "0", "10"],
        [0, "0.0", "0.0"],
        [123.456, "0", "123"],
        [123.456, "0,0", "123"],
        [123.456, "0.0", "123.5"],
        [123.456, "0,0.0", "123.5"],
        [123.456, "0.00", "123.46"],
        [9876.54321, "0,0", "9,877"],
        [9876.54321, "0,0.0", "9,876.5"],
        [9876.54321, "0.00", "9876.54"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large positive exponent number with new logic", function () {
      var tests = [
        [3.3306690738754696e13, "0", "33306690738755"],
        [3.3306690738754696e13, "0,0", "33,306,690,738,755"],
        [3.3306690738754696e13, "0.0", "33306690738754.7"],
        [3.3306690738754696e13, "0,0.0", "33,306,690,738,754.7"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large positive exponent up to e16 number with new logic", function () {
      var tests = [
        [3.3306690738754696e16, "0", "33306690738754696"],
        [3.3306690738754696e16, "0,0", "33,306,690,738,754,696"],
        [3.3306690738754696e16, "0.0", "33306690738754696.0"],
        [3.3306690738754696e16, "0,0.0", "33,306,690,738,754,696.0"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large negative exponent up to e-16 number with new logic", function () {
      var tests = [
        [33306690738754696e-16, "0", "3"],
        [33306690738754696e-16, "0,0", "3"],
        [33306690738754696e-16, "0.0", "3.3"],
        [33306690738754696e-16, "0,0.0", "3.3"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large negative exponent up to e-17 number with new logic", function () {
      var tests = [
        [333066907387546960e-17, "0", "3"],
        [333066907387546960e-17, "0,0", "3"],
        [333066907387546960e-17, "0.0", "3.3"],
        [333066907387546960e-17, "0,0.0", "3.3"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large negative exponent up to e-20 number with new logic", function () {
      var tests = [
        [333066907387546960000e-20, "0", "3"],
        [333066907387546960000e-20, "0,0", "3"],
        [333066907387546960000e-20, "0.0", "3.3"],
        [333066907387546960000e-20, "0,0.0", "3.3"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it.skip("should format a large positive exponent up to e20 number with new logic", function () {
      var tests = [
        [3.3306690738754696e20, "0", "333066907387546959872"],
        [3.3306690738754696e20, "0,0", "333,066,907,387,546,959,872"],
        [3.3306690738754696e20, "0.0", "333066907387546959872.0"],
        [3.3306690738754696e20, "0,0.0", "333,066,907,387,546,959,872.0"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it.skip("should format a large positive exponent number with new logic", function () {
      var tests = [
        [3.3306690738754696e26, "0", "333066907387546960000000000"],
        [3.3306690738754696e26, "0,0", "333,066,907,387,546,960,000,000,000"],
        [3.3306690738754696e26, "0.0", "333066907387546960000000000.0"],
        [3.3306690738754696e26, "0,0.0", "333,066,907,387,546,960,000,000,000.0"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a number with optional decimals", function () {
      var tests = [
        [3.3306690738754696, "0.00[0000]", "3.330669"],
        [3.3306690738754696, "0.00[00]", "3.3307"],
        [3.3306690738754696, "0.[000000]", "3.330669"],
        [3.3306690738754696, "0[.000000]", "3.3306691"],
        [300, "0.[000000]", "300"],
        [300, "0[.000000]", "300.0000000"],
        [3.33, "0.00[0000]", "3.33"],
        [3.3306, "0.00[0000]", "3.3306"],
        [3.3306, "0.00[0]", "3.331"],
        [3.3, "0.00[0]", "3.30"],
        [300, "0.00[0]", "300.00"],
        [300, "[0000].00[0]", "0300.00"],
        [3, "[0]000.00[0]", "0003.00"],
        [3, "[0]0.00[0]", "03.00"],
        [3000, "[0]0.00[0]", "3000.00"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large negative exponent number with new logic", function () {
      var tests = [
        [3.3306690738754696e-13, "0", "0"],
        [3.3306690738754696e-13, "0,0", "0"],
        [3.3306690738754696e-13, "0.0", "0.0"],
        [3.3306690738754696e-13, "0,0.0", "0.0"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });

    it("should format a large positive exponent number with new logic", function () {
      var tests = [
        ["10", "0", "10"],
        ["0", "0.0", "0.0"],
        ["123.456", "0", "123"],
        ["123.456", "0,0", "123"],
        ["123.456", "0.0", "123.5"],
        ["123.456", "0,0.0", "123.5"],
        ["123.456", "0.00", "123.46"],
        ["9876.54321", "0,0", "9,877"],
        ["9876.54321", "0,0.0", "9,876.5"],
        ["9876.54321", "0.00", "9876.54"],
        ["333066907387546960000e-20", "0", "3"],
        ["333066907387546960000e-20", "0,0", "3"],
        ["333066907387546960000e-20", "0.0", "3.3"],
        ["333066907387546960000e-20", "0,0.0", "3.3"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1]), `${tests[i][0]} format ${tests[i][1]}`).to.equal(tests[i][2]);
      }
    });
  });

  describe("Currency", function () {
    it("should format a currency", function () {
      var tests = [
        [1000.234, "$0,0.00", "$1,000.23"],
        [-1000.234, "($0,0)", "($1,000)"],
        [-1000.234, "$0.00", "-$1000.23"],
        [1230974, "($0.00a)", "$1.23m"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1])).to.equal(tests[i][2]);
      }
    });
  });

  describe("Percentages", function () {
    it("should format a percentages", function () {
      var tests = [
        [1, "0%", "100%"],
        [0.974878234, "0.000%", "97.488%"],
        [-0.43, "0%", "-43%"],
        [0.43, "(0.000%)", "43.000%"]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).format(tests[i][1])).to.equal(tests[i][2]);
      }
    });
  });

  describe("Unformat", function () {
    it("should unformat", function () {
      var tests = [
        ["10,000.123", 10000.123],
        ["(0.12345)", -0.12345],
        ["(£1.23m)", -1230000],
        ["10k", 10000],
        ["-10k", -10000],
        ["23rd", 23],
        ["£10,000.00", 10000],
        ["-76%", -0.76],
        ["2:23:57", 8637]
      ];

      for (var i = 0; i < tests.length; i++) {
        expect(numeral(tests[i][0]).value()).to.equal(tests[i][1]);
      }
    });
  });
});
