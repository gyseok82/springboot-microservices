package microservices.book.multiplication.domain;

import lombok.*;

@AllArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
public final class Multiplication {

    private int factorA;
    private int factorB;

    // json 직렬화를 위한 빈 생성자.
//    public Multiplication() {
//        this(0, 0);
//    }
}
