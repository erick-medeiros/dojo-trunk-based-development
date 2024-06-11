#include <stdio.h>
#include <string.h>
#include <ctype.h>

void transformString(char command, char *str) {
    int i;
    switch(command) {
        case 'U':
            for(i = 0; str[i]; i++)
                str[i] = toupper(str[i]);
            break;
        case 'L':
            for(i = 0; str[i]; i++)
                str[i] = tolower(str[i]);
            break;
        default:
            printf("Comando de transformação inválido!\n");
    }
}

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Uso: %s <comando> <string>\n", argv[0]);
        return 1;
    }

    char command = argv[1][0];
    char *str = argv[2];

    transformString(command, str);

    printf("%s\n", str);

    return 0;
}