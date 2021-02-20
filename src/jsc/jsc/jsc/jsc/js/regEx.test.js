test('should match the Regular Expression', function () {
    expect("testmail@gmail.com").toMatch(/\S+@\S+\.\S+/);
});
