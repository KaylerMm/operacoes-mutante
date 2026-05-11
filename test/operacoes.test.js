const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Forte para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números', () => { 
    expect(soma(2, 3)).toBe(5); 
    expect(soma(-2, -3)).toBe(-5); 
    expect(soma(0, 0)).toBe(0); 
  });
  test('2. deve subtrair dois números', () => { 
    expect(subtracao(5, 2)).toBe(3); 
    expect(subtracao(2, 5)).toBe(-3); 
  });
  test('3. deve multiplicar dois números', () => { 
    expect(multiplicacao(3, 4)).toBe(12); 
    expect(multiplicacao(-3, 4)).toBe(-12); 
    expect(multiplicacao(3, 0)).toBe(0); 
  });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(-10, 2)).toBe(-5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência', () => { 
    expect(potencia(2, 3)).toBe(8); 
    expect(potencia(2, 0)).toBe(1); 
  });
  test('6. deve calcular a raiz quadrada', () => { 
    expect(raizQuadrada(16)).toBe(4); 
    expect(raizQuadrada(0)).toBe(0); 
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('7. deve retornar o resto da divisão', () => { 
    expect(restoDivisao(10, 3)).toBe(1); 
    expect(restoDivisao(10, 2)).toBe(0); 
  });
  test('8. deve calcular o fatorial', () => { 
    expect(fatorial(4)).toBe(24); 
    expect(fatorial(1)).toBe(1); 
    expect(fatorial(0)).toBe(1); 
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('9. deve calcular a média de um array', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20); 
    expect(mediaArray([])).toBe(0); 
  });
  test('10. deve somar um array', () => { 
    expect(somaArray([1, 2, 3])).toBe(6); 
    expect(somaArray([])).toBe(0); 
  });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50); 
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  test('12. deve encontrar o valor mínimo em um array', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2); 
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });
  test('13. deve retornar o valor absoluto', () => { 
    expect(valorAbsoluto(-5)).toBe(5); 
    expect(valorAbsoluto(5)).toBe(5); 
  });
  test('14. deve arredondar um número', () => { 
    expect(arredondar(9.8)).toBe(10); 
    expect(arredondar(9.2)).toBe(9); 
    expect(arredondar(9.5)).toBe(10); 
  });
  test('15. deve retornar true ou false para número par', () => { 
    expect(isPar(100)).toBe(true); 
    expect(isPar(101)).toBe(false); 
  });
  test('16. deve retornar true ou false para número ímpar', () => { 
    expect(isImpar(7)).toBe(true); 
    expect(isImpar(8)).toBe(false); 
  });
  test('17. deve calcular uma porcentagem simples', () => { 
    expect(calcularPorcentagem(50, 200)).toBe(100); 
    expect(calcularPorcentagem(0, 200)).toBe(0); 
  });
  test('18. deve aumentar um valor em uma porcentagem', () => { 
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); 
    expect(aumentarPorcentagem(100, 0)).toBeCloseTo(100); 
  });
  test('19. deve diminuir um valor em uma porcentagem', () => { 
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); 
    expect(diminuirPorcentagem(100, 0)).toBeCloseTo(100); 
  });
  test('20. deve inverter o sinal de um número', () => { 
    expect(inverterSinal(42)).toBe(-42); 
    expect(inverterSinal(-42)).toBe(42); 
    expect(inverterSinal(0)).toBe(-0); 
  });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno', () => { 
    expect(seno(0)).toBe(0); 
    expect(seno(Math.PI / 2)).toBe(1); 
  });
  test('22. deve calcular o cosseno', () => { 
    expect(cosseno(0)).toBe(1); 
    expect(cosseno(Math.PI)).toBe(-1); 
  });
  test('23. deve calcular a tangente', () => { 
    expect(tangente(0)).toBe(0); 
  });
  test('24. deve calcular o logaritmo natural', () => { 
    expect(logaritmoNatural(Math.E)).toBe(1); 
    expect(logaritmoNatural(1)).toBe(0); 
  });
  test('25. deve calcular o logaritmo na base 10', () => { 
    expect(logaritmoBase10(100)).toBe(2); 
    expect(logaritmoBase10(1)).toBe(0); 
  });
  test('26. deve arredondar para baixo', () => { 
    expect(arredondarParaBaixo(5.9)).toBe(5); 
    expect(arredondarParaBaixo(5.1)).toBe(5); 
  });
  test('27. deve arredondar para cima', () => { 
    expect(arredondarParaCima(5.1)).toBe(6); 
    expect(arredondarParaCima(5.9)).toBe(6); 
  });
  test('28. deve calcular a hipotenusa', () => { 
    expect(hipotenusa(3, 4)).toBe(5); 
    expect(hipotenusa(0, 0)).toBe(0); 
  });
  test('29. deve converter graus para radianos', () => { 
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); 
    expect(grausParaRadianos(0)).toBe(0); 
  });
  test('30. deve converter radianos para graus', () => { 
    expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); 
    expect(radianosParaGraus(0)).toBe(0); 
  });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC', () => { 
    expect(mdc(10, 5)).toBe(5); 
    expect(mdc(7, 3)).toBe(1); 
    expect(mdc(10, 0)).toBe(10); 
  });
  test('32. deve calcular o MMC', () => { 
    expect(mmc(10, 5)).toBe(10); 
    expect(mmc(7, 3)).toBe(21); 
  });
  test('33. deve verificar se um número é primo', () => { 
    expect(isPrimo(7)).toBe(true); 
    expect(isPrimo(4)).toBe(false); 
    expect(isPrimo(1)).toBe(false); 
    expect(isPrimo(-1)).toBe(false); 
    expect(isPrimo(2)).toBe(true); 
  });
  test('34. deve calcular o termo de Fibonacci', () => { 
    expect(fibonacci(10)).toBe(55); 
    expect(fibonacci(0)).toBe(0); 
    expect(fibonacci(1)).toBe(1); 
    expect(fibonacci(-1)).toBe(-1); 
  });
  test('35. deve calcular o produto de um array', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24); 
    expect(produtoArray([])).toBe(1); 
  });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5); 
    expect(clamp(-5, 0, 10)).toBe(0); 
    expect(clamp(15, 0, 10)).toBe(10); 
  });
  test('37. deve verificar se um número é divisível por outro', () => { 
    expect(isDivisivel(10, 2)).toBe(true); 
    expect(isDivisivel(10, 3)).toBe(false); 
  });
  test('38. deve converter Celsius para Fahrenheit', () => { 
    expect(celsiusParaFahrenheit(0)).toBe(32); 
    expect(celsiusParaFahrenheit(100)).toBe(212); 
  });
  test('39. deve converter Fahrenheit para Celsius', () => { 
    expect(fahrenheitParaCelsius(32)).toBe(0); 
    expect(fahrenheitParaCelsius(212)).toBe(100); 
  });
  test('40. deve calcular o inverso', () => { 
    expect(inverso(4)).toBe(0.25); 
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { 
    expect(areaCirculo(10)).toBeCloseTo(314.159); 
    expect(areaCirculo(0)).toBe(0); 
  });
  test('42. deve calcular a área de um retângulo', () => { 
    expect(areaRetangulo(5, 4)).toBe(20); 
    expect(areaRetangulo(0, 4)).toBe(0); 
  });
  test('43. deve calcular o perímetro de um retângulo', () => { 
    expect(perimetroRetangulo(5, 4)).toBe(18); 
    expect(perimetroRetangulo(0, 0)).toBe(0); 
  });
  test('44. deve verificar se um número é maior', () => { 
    expect(isMaiorQue(10, 5)).toBe(true); 
    expect(isMaiorQue(5, 10)).toBe(false); 
    expect(isMaiorQue(10, 10)).toBe(false); 
  });
  test('45. deve verificar se um número é menor', () => { 
    expect(isMenorQue(5, 10)).toBe(true); 
    expect(isMenorQue(10, 5)).toBe(false); 
    expect(isMenorQue(10, 10)).toBe(false); 
  });
  test('46. deve verificar se números são iguais', () => { 
    expect(isEqual(7, 7)).toBe(true); 
    expect(isEqual(7, 8)).toBe(false); 
  });
  test('47. deve calcular a mediana', () => { 
    expect(medianaArray([5, 1, 3, 4, 2])).toBe(3); 
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5); 
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('48. deve calcular o dobro', () => { 
    expect(dobro(10)).toBe(20); 
    expect(dobro(0)).toBe(0); 
  });
  test('49. deve calcular o triplo', () => { 
    expect(triplo(10)).toBe(30); 
    expect(triplo(0)).toBe(0); 
  });
  test('50. deve calcular a metade', () => { 
    expect(metade(20)).toBe(10); 
    expect(metade(0)).toBe(0); 
  });
});