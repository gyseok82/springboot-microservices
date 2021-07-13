package microservices.book.multiplication.repository;

import microservices.book.multiplication.domain.Multiplication;
import org.springframework.data.repository.CrudRepository;

// Multipliication을 저장하고 조회하기 위한 인터페이스
public interface MultipliicationRepository extends CrudRepository<Multiplication, Long> {
}
