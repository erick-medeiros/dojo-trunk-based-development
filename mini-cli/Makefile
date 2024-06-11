CC = gcc
CFLAGS = -Wall -Wextra -Werror
BIN=minicli.out

.PHONY: all clean

all: $(BIN)

$(BIN): main.o
	$(CC) $(CFLAGS) $^ -o $@

main.o: main.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(BIN) main.o
