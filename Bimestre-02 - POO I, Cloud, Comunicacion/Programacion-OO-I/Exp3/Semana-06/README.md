<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Interfaces`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `interface` | Contrato de métodos |
| `implements` | Implementar interfaz |
| Múltiple | Una clase, varias interfaces |
| `default` | Métodos con implementación |

---

### 💻 Código Clave

```java
public interface Imprimible {
    void imprimir();
}

public interface Exportable {
    void exportar(String formato);
}

public class Reporte implements Imprimible, Exportable {

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo...");
    }

    @Override
    public void exportar(String formato) {
        System.out.println("Exportando a " + formato);
    }
}
```

---

<div align="center">
<sub>Programación OO I · Experiencia 3</sub>
</div>
