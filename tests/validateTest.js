describe("validation tests", function(){
	describe("validate length", function(){
		it("canary test", function(){
			expect(true).to.equal(true);
		});
		it("answer 1 should be greater than 7 letters", function(){
			var actual = validate("saitej9", "1234567");
			expect(true).to.equal(actual);
		});
		it("answer 2 should be greater than 7 letters", function(){
			var actual = validate("saitej9", "12345567");
			expect(true).to.equal(actual);
		});
	})
})