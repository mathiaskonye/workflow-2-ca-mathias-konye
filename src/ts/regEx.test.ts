test('should match the Regular Expression', () => {
    expect("testmail@gmail.com").toMatch(/\S+@\S+\.\S+/);
})


