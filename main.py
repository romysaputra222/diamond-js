n = int(input('massukan n : '));

for i in range(0, n):
    print(' ' * (n - i), end='');
    for i in range(i):
        print('+ ', end='');
    print()

for i in range(n, 0, -1):
    print(' ' * (n - i), end='');
    for i in range(i):
        print('+ ', end='');
    print()
