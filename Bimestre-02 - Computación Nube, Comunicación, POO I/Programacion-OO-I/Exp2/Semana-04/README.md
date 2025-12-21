<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Herencia`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `extends` | Heredar de clase padre |
| `super` | Referencia a clase padre |
| Sobrescritura | `@Override` |
| `protected` | Acceso en subclases |

---

### 💻 Código Clave

```java
public class Animal {
    protected String nombre;

    public void hacerSonido() {
        System.out.println("...");
    }
}

public class Perro extends Animal {

    @Override
    public void hacerSonido() {
        System.out.println("Guau!");
    }

    public void ladrar() {
        System.out.println(nombre + " ladra");
    }
}

// Uso
Perro p = new Perro();
p.hacerSonido();  // Guau!
```

---

<div align="center">
<sub>Programación OO I · Experiencia 2</sub>
</div>
