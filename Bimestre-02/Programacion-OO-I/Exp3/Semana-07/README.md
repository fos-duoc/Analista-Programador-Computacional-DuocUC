<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Excepciones`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `try-catch` | Capturar errores |
| `finally` | Siempre se ejecuta |
| `throws` | Propagar excepción |
| `throw` | Lanzar excepción |

---

### 💻 Código Clave

```java
public class Calculadora {

    public int dividir(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("División por cero");
        }
        return a / b;
    }
}

// Uso
try {
    int resultado = calc.dividir(10, 0);
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Fin operación");
}
```

---

<div align="center">
<sub>Programación OO I · Experiencia 3</sub>
</div>
