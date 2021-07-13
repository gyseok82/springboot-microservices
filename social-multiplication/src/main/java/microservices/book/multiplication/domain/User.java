package microservices.book.multiplication.domain;

import lombok.*;

@AllArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
public final class User {

    private final String alias;

    protected User() {
        alias = null;
    }
}
