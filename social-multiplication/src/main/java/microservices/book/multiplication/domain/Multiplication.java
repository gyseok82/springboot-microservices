package microservices.book.multiplication.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@AllArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
@Entity
public final class Multiplication {

    @Id
    @GeneratedValue
    @Column(name="MULTIPLICATION_ID")
    private Long id;

    private int factorA;
    private int factorB;

    // json 직렬화를 위한 빈 생성자.
    public Multiplication() {
        this(0, 0);
    }

    public Multiplication(int factorA, int factorB) {
        this.factorA = factorA;
        this.factorB = factorB;
    }
}
