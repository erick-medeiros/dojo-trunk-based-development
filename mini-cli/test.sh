#!/bin/bash

BIN=minicli.out

# Função de assert para comparar a saída do programa com a saída esperada
assert_equals() {
    local actual="$1"
    local expected="$2"
    if [[ "$actual" != "$expected" ]]; then
        echo "ERRO: Saída inesperada. Esperado: '$expected', Obtido: '$actual'"
        exit 1
    fi
}

# Teste de transformação para maiúsculas
echo "Teste de transformação para maiúsculas"
result=$(./$BIN U "hello")
assert_equals "$result" "HELLO"

# Teste de transformação para minúsculas
echo "Teste de transformação para minúsculas"
result=$(./$BIN L "HELLO")
assert_equals "$result" "hello"

# Teste de transformação para duplicar caracteres
# echo "Teste de transformação para duplicar caracteres"
# result=$(echo "hello" | ./$BIN D)
# assert_equals "$result" "hheelllloo"

# Teste de transformação para inverter string
# echo "Teste de transformação para inverter string"
# result=$(echo "hello" | ./$BIN R)
# assert_equals "$result" "olleh"

# Teste de transformação para caracteres ASCII + 1
# echo "Teste de transformação para caracteres ASCII + 1"
# result=$(echo "hello" | ./$BIN A)
# assert_equals "$result" "ifmmp"

# Teste de transformação para comando inválido
# echo "Teste de transformação para comando inválido"
# result=$(echo "hello" | ./$BIN X)
# assert_equals "$result" "Comando de transformação inválido!"

# Teste de entrada vazia
# echo "Teste de entrada vazia"
# result=$(echo "" | ./$BIN U)
# assert_equals "$result" ""

echo "Todos os testes concluídos com sucesso."
