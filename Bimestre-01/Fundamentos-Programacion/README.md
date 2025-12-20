# ◈ Fundamentos de Programación

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 01 · Lenguaje: Python 3.x · Paradigma: Estructurado               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [Variables y Tipos](#-variables-y-tipos)
- [Operadores](#-operadores)
- [Estructuras de Control](#-estructuras-de-control)
- [Funciones](#-funciones)
- [Estructuras de Datos](#-estructuras-de-datos)
- [Entrada/Salida](#-entradasalida)
- [Manejo de Errores](#-manejo-de-errores)

---

## 📌 Variables y Tipos

```python
# ═══════════════════════════════════════════════════════════════════════
# TIPOS PRIMITIVOS
# ═══════════════════════════════════════════════════════════════════════

# Numéricos
entero = 42                    # int
decimal = 3.14159              # float
complejo = 2 + 3j              # complex

# Texto
texto = "Hola Mundo"           # str
caracter = 'A'                 # str (Python no tiene char)

# Booleano
verdadero = True               # bool
falso = False                  # bool

# Nulo
nada = None                    # NoneType

# ═══════════════════════════════════════════════════════════════════════
# CONVERSIÓN DE TIPOS (Casting)
# ═══════════════════════════════════════════════════════════════════════

int("42")        # → 42
float("3.14")    # → 3.14
str(100)         # → "100"
bool(1)          # → True
bool(0)          # → False

# ═══════════════════════════════════════════════════════════════════════
# VERIFICAR TIPO
# ═══════════════════════════════════════════════════════════════════════

type(variable)                 # Retorna el tipo
isinstance(x, int)             # True si x es int
```

---

## 📌 Operadores

```python
# ═══════════════════════════════════════════════════════════════════════
# ARITMÉTICOS
# ═══════════════════════════════════════════════════════════════════════

a + b      # Suma
a - b      # Resta
a * b      # Multiplicación
a / b      # División (float)
a // b     # División entera
a % b      # Módulo (resto)
a ** b     # Potencia

# ═══════════════════════════════════════════════════════════════════════
# COMPARACIÓN
# ═══════════════════════════════════════════════════════════════════════

a == b     # Igual
a != b     # Diferente
a > b      # Mayor que
a < b      # Menor que
a >= b     # Mayor o igual
a <= b     # Menor o igual

# ═══════════════════════════════════════════════════════════════════════
# LÓGICOS
# ═══════════════════════════════════════════════════════════════════════

a and b    # Y lógico
a or b     # O lógico
not a      # Negación

# ═══════════════════════════════════════════════════════════════════════
# ASIGNACIÓN COMPUESTA
# ═══════════════════════════════════════════════════════════════════════

x += 1     # x = x + 1
x -= 1     # x = x - 1
x *= 2     # x = x * 2
x /= 2     # x = x / 2
x //= 2    # x = x // 2
x %= 2     # x = x % 2
x **= 2    # x = x ** 2
```

---

## 📌 Estructuras de Control

```python
# ═══════════════════════════════════════════════════════════════════════
# CONDICIONALES
# ═══════════════════════════════════════════════════════════════════════

# If-Elif-Else
if condicion:
    # código
elif otra_condicion:
    # código
else:
    # código

# Operador Ternario
resultado = "par" if x % 2 == 0 else "impar"

# Match (Python 3.10+)
match valor:
    case 1:
        print("uno")
    case 2:
        print("dos")
    case _:
        print("otro")

# ═══════════════════════════════════════════════════════════════════════
# BUCLES
# ═══════════════════════════════════════════════════════════════════════

# While
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# For con range
for i in range(5):           # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):        # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2):    # 0, 2, 4, 6, 8 (step=2)
    print(i)

# For con colección
for item in lista:
    print(item)

for i, item in enumerate(lista):
    print(f"{i}: {item}")

# ═══════════════════════════════════════════════════════════════════════
# CONTROL DE FLUJO
# ═══════════════════════════════════════════════════════════════════════

break       # Sale del bucle
continue    # Salta a siguiente iteración
pass        # No hace nada (placeholder)
```

---

## 📌 Funciones

```python
# ═══════════════════════════════════════════════════════════════════════
# DEFINICIÓN BÁSICA
# ═══════════════════════════════════════════════════════════════════════

def saludar():
    print("Hola!")

def saludar_a(nombre):
    print(f"Hola, {nombre}!")

def sumar(a, b):
    return a + b

# ═══════════════════════════════════════════════════════════════════════
# PARÁMETROS
# ═══════════════════════════════════════════════════════════════════════

# Parámetros por defecto
def saludar(nombre="Mundo"):
    print(f"Hola, {nombre}!")

# Argumentos posicionales y con nombre
def info(nombre, edad, ciudad="Santiago"):
    print(f"{nombre}, {edad} años, {ciudad}")

info("Juan", 25)                    # Posicional
info(nombre="Ana", edad=30)         # Con nombre
info("Pedro", ciudad="Valpo", edad=28)

# *args (argumentos variables)
def sumar_todos(*numeros):
    return sum(numeros)

sumar_todos(1, 2, 3, 4)  # → 10

# **kwargs (keyword arguments)
def mostrar_datos(**datos):
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_datos(nombre="Ana", edad=25)

# ═══════════════════════════════════════════════════════════════════════
# FUNCIONES LAMBDA
# ═══════════════════════════════════════════════════════════════════════

cuadrado = lambda x: x ** 2
sumar = lambda a, b: a + b

# Uso con funciones de orden superior
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
pares = list(filter(lambda x: x % 2 == 0, numeros))
```

---

## 📌 Estructuras de Datos

```python
# ═══════════════════════════════════════════════════════════════════════
# LISTAS (mutables, ordenadas)
# ═══════════════════════════════════════════════════════════════════════

lista = [1, 2, 3, 4, 5]
lista = list()                 # Lista vacía

# Acceso
lista[0]                       # Primer elemento
lista[-1]                      # Último elemento
lista[1:3]                     # Slice [1, 2]
lista[::2]                     # Cada 2 elementos

# Modificación
lista.append(6)                # Agregar al final
lista.insert(0, 0)             # Insertar en posición
lista.extend([7, 8])           # Extender con otra lista
lista.remove(3)                # Eliminar por valor
lista.pop()                    # Eliminar último
lista.pop(0)                   # Eliminar por índice
lista.clear()                  # Vaciar lista

# Utilidades
len(lista)                     # Longitud
lista.index(3)                 # Índice del elemento
lista.count(2)                 # Contar ocurrencias
lista.sort()                   # Ordenar (in-place)
lista.reverse()                # Invertir (in-place)
sorted(lista)                  # Retorna nueva lista ordenada

# List comprehension
cuadrados = [x**2 for x in range(10)]
pares = [x for x in range(10) if x % 2 == 0]

# ═══════════════════════════════════════════════════════════════════════
# TUPLAS (inmutables, ordenadas)
# ═══════════════════════════════════════════════════════════════════════

tupla = (1, 2, 3)
tupla = 1, 2, 3                # Sin paréntesis también funciona
singleton = (1,)               # Tupla de un elemento

# Desempaquetado
a, b, c = tupla
primero, *resto = (1, 2, 3, 4)  # primero=1, resto=[2,3,4]

# ═══════════════════════════════════════════════════════════════════════
# DICCIONARIOS (mutables, clave-valor)
# ═══════════════════════════════════════════════════════════════════════

dic = {"nombre": "Juan", "edad": 25}
dic = dict(nombre="Juan", edad=25)

# Acceso
dic["nombre"]                  # Lanza KeyError si no existe
dic.get("nombre")              # Retorna None si no existe
dic.get("ciudad", "N/A")       # Retorna valor por defecto

# Modificación
dic["ciudad"] = "Santiago"     # Agregar/modificar
dic.update({"pais": "Chile"})  # Actualizar con otro dict
del dic["edad"]                # Eliminar clave
dic.pop("nombre")              # Eliminar y retornar

# Iteración
for clave in dic:
    print(clave)
for clave, valor in dic.items():
    print(f"{clave}: {valor}")
for valor in dic.values():
    print(valor)

# Dict comprehension
cuadrados = {x: x**2 for x in range(5)}

# ═══════════════════════════════════════════════════════════════════════
# SETS (únicos, no ordenados)
# ═══════════════════════════════════════════════════════════════════════

conjunto = {1, 2, 3, 4, 5}
conjunto = set([1, 2, 2, 3])   # → {1, 2, 3}

conjunto.add(6)                # Agregar
conjunto.remove(3)             # Eliminar (error si no existe)
conjunto.discard(10)           # Eliminar (sin error)

# Operaciones de conjuntos
a | b                          # Unión
a & b                          # Intersección
a - b                          # Diferencia
a ^ b                          # Diferencia simétrica
```

---

## 📌 Entrada/Salida

```python
# ═══════════════════════════════════════════════════════════════════════
# INPUT
# ═══════════════════════════════════════════════════════════════════════

nombre = input("Ingrese nombre: ")
edad = int(input("Ingrese edad: "))
precio = float(input("Ingrese precio: "))

# ═══════════════════════════════════════════════════════════════════════
# PRINT
# ═══════════════════════════════════════════════════════════════════════

print("Hola Mundo")
print("Valor:", variable)
print("a", "b", "c", sep="-")          # a-b-c
print("Sin salto", end="")             # Sin newline

# F-strings (recomendado)
print(f"Nombre: {nombre}, Edad: {edad}")
print(f"Precio: ${precio:.2f}")        # 2 decimales
print(f"Número: {num:05d}")            # Padding con ceros

# Format
print("Nombre: {}, Edad: {}".format(nombre, edad))
print("Nombre: {n}, Edad: {e}".format(n=nombre, e=edad))

# ═══════════════════════════════════════════════════════════════════════
# ARCHIVOS
# ═══════════════════════════════════════════════════════════════════════

# Lectura
with open("archivo.txt", "r", encoding="utf-8") as f:
    contenido = f.read()           # Todo el contenido
    # o
    lineas = f.readlines()         # Lista de líneas
    # o
    for linea in f:
        print(linea.strip())

# Escritura
with open("archivo.txt", "w", encoding="utf-8") as f:
    f.write("Hola Mundo\n")

# Append
with open("archivo.txt", "a", encoding="utf-8") as f:
    f.write("Nueva línea\n")
```

---

## 📌 Manejo de Errores

```python
# ═══════════════════════════════════════════════════════════════════════
# TRY-EXCEPT
# ═══════════════════════════════════════════════════════════════════════

try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: División por cero")

try:
    numero = int(input("Número: "))
except ValueError:
    print("Error: No es un número válido")

# Múltiples excepciones
try:
    # código riesgoso
    pass
except ValueError:
    print("Error de valor")
except TypeError:
    print("Error de tipo")
except Exception as e:
    print(f"Error inesperado: {e}")

# Try-Except-Else-Finally
try:
    resultado = operacion()
except Exception as e:
    print(f"Error: {e}")
else:
    print("Éxito!")              # Solo si no hay error
finally:
    print("Siempre se ejecuta")  # Limpieza

# ═══════════════════════════════════════════════════════════════════════
# RAISE (Lanzar excepciones)
# ═══════════════════════════════════════════════════════════════════════

def dividir(a, b):
    if b == 0:
        raise ValueError("El divisor no puede ser cero")
    return a / b
```

---

## 🎯 Patrones Comunes

```python
# ═══════════════════════════════════════════════════════════════════════
# VALIDACIÓN DE ENTRADA
# ═══════════════════════════════════════════════════════════════════════

def leer_entero(mensaje):
    while True:
        try:
            return int(input(mensaje))
        except ValueError:
            print("⚠ Ingrese un número válido")

def leer_rango(mensaje, minimo, maximo):
    while True:
        valor = leer_entero(mensaje)
        if minimo <= valor <= maximo:
            return valor
        print(f"⚠ Debe estar entre {minimo} y {maximo}")

# ═══════════════════════════════════════════════════════════════════════
# MENÚ INTERACTIVO
# ═══════════════════════════════════════════════════════════════════════

def mostrar_menu():
    print("\n╔═══════════════════════╗")
    print("║       MENÚ            ║")
    print("╠═══════════════════════╣")
    print("║ 1. Opción 1           ║")
    print("║ 2. Opción 2           ║")
    print("║ 0. Salir              ║")
    print("╚═══════════════════════╝")

def main():
    while True:
        mostrar_menu()
        opcion = leer_entero("Seleccione: ")

        if opcion == 1:
            print("Ejecutando opción 1...")
        elif opcion == 2:
            print("Ejecutando opción 2...")
        elif opcion == 0:
            print("¡Hasta luego!")
            break
        else:
            print("⚠ Opción no válida")

if __name__ == "__main__":
    main()
```

---

<div align="center">

`{ Fundamentos sólidos → Código limpio }`

</div>
