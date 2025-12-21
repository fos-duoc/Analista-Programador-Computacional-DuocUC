<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Polimorfismo`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| Polimorfismo | Muchas formas, misma interfaz |
| Sobrecarga | Mismo método, diferentes params |
| Sobrescritura | Redefinir en subclase |
| Tipo dinámico | Comportamiento en runtime |

---

### 💻 Código Clave

```java
// Clase base
public abstract class Figura {
    public abstract double area();
}

// Subclases
public class Circulo extends Figura {
    private double radio;

    @Override
    public double area() {
        return Math.PI * radio * radio;
    }
}

public class Rectangulo extends Figura {
    private double ancho, alto;

    @Override
    public double area() {
        return ancho * alto;
    }
}

// Polimorfismo
Figura f = new Circulo(5);
System.out.println(f.area());
```

---

<div align="center">
<sub>Programación OO I · Experiencia 2</sub>
</div>
