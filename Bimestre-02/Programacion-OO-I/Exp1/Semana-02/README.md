<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Clases y Objetos`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| Clase | Plantilla para objetos |
| Objeto | Instancia de una clase |
| Atributos | Estado del objeto |
| Métodos | Comportamiento |

---

### 💻 Código Clave

```java
public class Persona {
    // Atributos
    private String nombre;
    private int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    public void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
}

// Uso
Persona p = new Persona("Juan", 20);
p.saludar();
```

---

<div align="center">
<sub>Programación OO I · Experiencia 1</sub>
</div>
