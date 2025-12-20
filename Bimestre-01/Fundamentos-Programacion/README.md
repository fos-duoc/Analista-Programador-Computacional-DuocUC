<div align="center">

# ◈ Fundamentos de Programación

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Paradigma](https://img.shields.io/badge/Paradigma-Estructurado-orange?style=for-the-badge)
![Bimestre](https://img.shields.io/badge/Bimestre-01-blue?style=for-the-badge)

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

</div>

## 📑 Tabla de Contenidos

<table>
<tr>
<td width="50%">

- [Variables y Tipos](#-variables-y-tipos)
- [Operadores](#-operadores)
- [Estructuras de Control](#-estructuras-de-control)
- [Funciones](#-funciones)

</td>
<td width="50%">

- [Estructuras de Datos](#-estructuras-de-datos)
- [Entrada/Salida](#-entradasalida)
- [Manejo de Errores](#-manejo-de-errores)
- [Patrones Comunes](#-patrones-comunes)

</td>
</tr>
</table>

---

## 📌 Variables y Tipos

<table>
<tr>
<td width="50%">

### Tipos Primitivos

```python
# ══════════════════════════════════
# NUMÉRICOS
# ══════════════════════════════════
entero = 42                 # int
decimal = 3.14159           # float
complejo = 2 + 3j           # complex

# ══════════════════════════════════
# TEXTO
# ══════════════════════════════════
texto = "Hola Mundo"        # str
caracter = 'A'              # str

# ══════════════════════════════════
# BOOLEANOS
# ══════════════════════════════════
verdadero = True            # bool
falso = False               # bool
nada = None                 # NoneType
```

</td>
<td width="50%">

### Conversión de Tipos

```python
# ══════════════════════════════════
# CASTING
# ══════════════════════════════════
int("42")        # → 42
float("3.14")    # → 3.14
str(100)         # → "100"
bool(1)          # → True
bool(0)          # → False

# ══════════════════════════════════
# VERIFICAR TIPO
# ══════════════════════════════════
type(variable)          # Retorna tipo
isinstance(x, int)      # True si x es int
isinstance(x, (int, float))  # Múltiples
```

</td>
</tr>
</table>

---

## 📌 Operadores

<table>
<tr>
<td width="33%">

### Aritméticos

| Op | Descripción |
|:--:|:------------|
| `+` | Suma |
| `-` | Resta |
| `*` | Multiplicación |
| `/` | División (float) |
| `//` | División entera |
| `%` | Módulo |
| `**` | Potencia |

</td>
<td width="33%">

### Comparación

| Op | Descripción |
|:--:|:------------|
| `==` | Igual |
| `!=` | Diferente |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual |
| `<=` | Menor o igual |

</td>
<td width="33%">

### Lógicos

| Op | Descripción |
|:--:|:------------|
| `and` | Y lógico |
| `or` | O lógico |
| `not` | Negación |

### Asignación

| Op | Equivale a |
|:--:|:-----------|
| `+=` | `x = x + n` |
| `-=` | `x = x - n` |
| `*=` | `x = x * n` |

</td>
</tr>
</table>

---

## 📌 Estructuras de Control

### ▸ Condicionales

```python
# ══════════════════════════════════════════════════════════════════════════════
# IF - ELIF - ELSE
# ══════════════════════════════════════════════════════════════════════════════

if condicion:
    # código si True
elif otra_condicion:
    # código alternativo
else:
    # código por defecto

# ══════════════════════════════════════════════════════════════════════════════
# OPERADOR TERNARIO
# ══════════════════════════════════════════════════════════════════════════════

resultado = "par" if x % 2 == 0 else "impar"

# ══════════════════════════════════════════════════════════════════════════════
# MATCH (Python 3.10+)
# ══════════════════════════════════════════════════════════════════════════════

match valor:
    case 1:
        print("uno")
    case 2:
        print("dos")
    case _:
        print("otro")
```

### ▸ Bucles

<table>
<tr>
<td width="50%">

#### While

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

</td>
<td width="50%">

#### For

```python
# Con range
for i in range(5):          # 0,1,2,3,4
    print(i)

for i in range(1, 6):       # 1,2,3,4,5
    print(i)

for i in range(0, 10, 2):   # 0,2,4,6,8
    print(i)
```

</td>
</tr>
</table>

```python
# ══════════════════════════════════════════════════════════════════════════════
# ITERACIÓN SOBRE COLECCIONES
# ══════════════════════════════════════════════════════════════════════════════

for item in lista:
    print(item)

for i, item in enumerate(lista):      # Con índice
    print(f"{i}: {item}")

for clave, valor in diccionario.items():
    print(f"{clave}: {valor}")

# ══════════════════════════════════════════════════════════════════════════════
# CONTROL DE FLUJO
# ══════════════════════════════════════════════════════════════════════════════

break       # 🛑 Sale del bucle
continue    # ⏭️ Salta a siguiente iteración
pass        # ⏸️ No hace nada (placeholder)
```

---

## 📌 Funciones

```python
# ══════════════════════════════════════════════════════════════════════════════
# DEFINICIÓN BÁSICA
# ══════════════════════════════════════════════════════════════════════════════

def saludar():
    """Función sin parámetros"""
    print("Hola!")

def sumar(a, b):
    """Función con retorno"""
    return a + b

# ══════════════════════════════════════════════════════════════════════════════
# PARÁMETROS AVANZADOS
# ══════════════════════════════════════════════════════════════════════════════

def saludar(nombre="Mundo"):              # Valor por defecto
    print(f"Hola, {nombre}!")

def sumar_todos(*numeros):                 # Args variables
    return sum(numeros)

def mostrar_datos(**datos):                # Keyword args
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

# ══════════════════════════════════════════════════════════════════════════════
# FUNCIONES LAMBDA
# ══════════════════════════════════════════════════════════════════════════════

cuadrado = lambda x: x ** 2
sumar = lambda a, b: a + b

# Uso con funciones de orden superior
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))      # [1, 4, 9, 16, 25]
pares = list(filter(lambda x: x % 2 == 0, numeros)) # [2, 4]
```

---

## 📌 Estructuras de Datos

### ▸ Listas `[ ]`

> [!NOTE]
> Las listas son **mutables** y **ordenadas**. Permiten duplicados.

```python
lista = [1, 2, 3, 4, 5]
lista = list()                 # Lista vacía

# ══════════════════════════════════════════════════════════════════════════════
# ACCESO
# ══════════════════════════════════════════════════════════════════════════════
lista[0]                       # Primer elemento
lista[-1]                      # Último elemento
lista[1:3]                     # Slice [1, 2]
lista[::2]                     # Cada 2 elementos

# ══════════════════════════════════════════════════════════════════════════════
# MODIFICACIÓN
# ══════════════════════════════════════════════════════════════════════════════
lista.append(6)                # ➕ Agregar al final
lista.insert(0, 0)             # ➕ Insertar en posición
lista.extend([7, 8])           # ➕ Extender con otra lista
lista.remove(3)                # ➖ Eliminar por valor
lista.pop()                    # ➖ Eliminar último
lista.pop(0)                   # ➖ Eliminar por índice

# ══════════════════════════════════════════════════════════════════════════════
# UTILIDADES
# ══════════════════════════════════════════════════════════════════════════════
len(lista)                     # 📏 Longitud
lista.sort()                   # 🔤 Ordenar (in-place)
sorted(lista)                  # 🔤 Retorna nueva lista ordenada
lista.reverse()                # 🔄 Invertir

# ══════════════════════════════════════════════════════════════════════════════
# LIST COMPREHENSION ⭐
# ══════════════════════════════════════════════════════════════════════════════
cuadrados = [x**2 for x in range(10)]
pares = [x for x in range(10) if x % 2 == 0]
```

### ▸ Diccionarios `{ }`

> [!NOTE]
> Los diccionarios son pares **clave-valor**. Claves únicas.

```python
dic = {"nombre": "Juan", "edad": 25}
dic = dict(nombre="Juan", edad=25)

# ══════════════════════════════════════════════════════════════════════════════
# ACCESO
# ══════════════════════════════════════════════════════════════════════════════
dic["nombre"]                  # Lanza KeyError si no existe
dic.get("nombre")              # Retorna None si no existe
dic.get("ciudad", "N/A")       # Retorna valor por defecto

# ══════════════════════════════════════════════════════════════════════════════
# MODIFICACIÓN
# ══════════════════════════════════════════════════════════════════════════════
dic["ciudad"] = "Santiago"     # ➕ Agregar/modificar
dic.update({"pais": "Chile"})  # ➕ Actualizar con otro dict
del dic["edad"]                # ➖ Eliminar clave

# ══════════════════════════════════════════════════════════════════════════════
# ITERACIÓN
# ══════════════════════════════════════════════════════════════════════════════
for clave in dic:              # Solo claves
for clave, valor in dic.items():  # Clave y valor
for valor in dic.values():     # Solo valores

# Dict comprehension
cuadrados = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}
```

<table>
<tr>
<td width="50%">

### ▸ Tuplas `( )`

```python
# Inmutables, ordenadas
tupla = (1, 2, 3)
tupla = 1, 2, 3         # Sin paréntesis
singleton = (1,)        # Un elemento

# Desempaquetado
a, b, c = tupla
primero, *resto = (1, 2, 3, 4)
```

</td>
<td width="50%">

### ▸ Sets `{ }`

```python
# Únicos, no ordenados
conjunto = {1, 2, 3, 4, 5}
conjunto = set([1, 2, 2, 3])  # → {1, 2, 3}

# Operaciones
a | b    # Unión
a & b    # Intersección
a - b    # Diferencia
```

</td>
</tr>
</table>

---

## 📌 Entrada/Salida

<table>
<tr>
<td width="50%">

### Input

```python
nombre = input("Ingrese nombre: ")
edad = int(input("Ingrese edad: "))
precio = float(input("Ingrese precio: "))
```

</td>
<td width="50%">

### Print

```python
print("Hola Mundo")
print("a", "b", "c", sep="-")  # a-b-c
print("Sin salto", end="")

# F-strings (recomendado) ⭐
print(f"Nombre: {nombre}")
print(f"Precio: ${precio:.2f}")
```

</td>
</tr>
</table>

```python
# ══════════════════════════════════════════════════════════════════════════════
# ARCHIVOS
# ══════════════════════════════════════════════════════════════════════════════

# 📖 Lectura
with open("archivo.txt", "r", encoding="utf-8") as f:
    contenido = f.read()        # Todo el contenido
    # o
    lineas = f.readlines()      # Lista de líneas
    # o
    for linea in f:
        print(linea.strip())

# ✏️ Escritura
with open("archivo.txt", "w", encoding="utf-8") as f:
    f.write("Hola Mundo\n")

# ➕ Append
with open("archivo.txt", "a", encoding="utf-8") as f:
    f.write("Nueva línea\n")
```

---

## 📌 Manejo de Errores

```python
# ══════════════════════════════════════════════════════════════════════════════
# TRY - EXCEPT
# ══════════════════════════════════════════════════════════════════════════════

try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("❌ Error: División por cero")

try:
    numero = int(input("Número: "))
except ValueError:
    print("❌ Error: No es un número válido")

# ══════════════════════════════════════════════════════════════════════════════
# MÚLTIPLES EXCEPCIONES
# ══════════════════════════════════════════════════════════════════════════════

try:
    # código riesgoso
    pass
except ValueError:
    print("Error de valor")
except TypeError:
    print("Error de tipo")
except Exception as e:
    print(f"Error inesperado: {e}")

# ══════════════════════════════════════════════════════════════════════════════
# TRY - EXCEPT - ELSE - FINALLY
# ══════════════════════════════════════════════════════════════════════════════

try:
    resultado = operacion()
except Exception as e:
    print(f"Error: {e}")
else:
    print("✅ Éxito!")          # Solo si no hay error
finally:
    print("🔄 Siempre se ejecuta")  # Limpieza
```

---

## 📌 Patrones Comunes

### ▸ Validación de Entrada

```python
def leer_entero(mensaje):
    """Lee un entero con validación"""
    while True:
        try:
            return int(input(mensaje))
        except ValueError:
            print("⚠️ Ingrese un número válido")

def leer_rango(mensaje, minimo, maximo):
    """Lee un entero dentro de un rango"""
    while True:
        valor = leer_entero(mensaje)
        if minimo <= valor <= maximo:
            return valor
        print(f"⚠️ Debe estar entre {minimo} y {maximo}")
```

### ▸ Menú Interactivo

```python
def mostrar_menu():
    print("""
    ╔═══════════════════════════╗
    ║         MENÚ              ║
    ╠═══════════════════════════╣
    ║  1. Opción 1              ║
    ║  2. Opción 2              ║
    ║  3. Opción 3              ║
    ║  0. Salir                 ║
    ╚═══════════════════════════╝
    """)

def main():
    while True:
        mostrar_menu()
        opcion = leer_entero("▸ Seleccione: ")

        if opcion == 1:
            print("Ejecutando opción 1...")
        elif opcion == 2:
            print("Ejecutando opción 2...")
        elif opcion == 3:
            print("Ejecutando opción 3...")
        elif opcion == 0:
            print("👋 ¡Hasta luego!")
            break
        else:
            print("⚠️ Opción no válida")

if __name__ == "__main__":
    main()
```

---

<div align="center">

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

[![Volver](https://img.shields.io/badge/←_Volver_al_inicio-blue?style=flat-square)](../../README.md)

**{ Fundamentos sólidos → Código limpio }**

</div>
