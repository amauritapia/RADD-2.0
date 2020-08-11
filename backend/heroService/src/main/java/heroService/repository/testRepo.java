package heroService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import heroService.models.testClass;
@Repository
public interface testRepo extends JpaRepository<testClass, String> {

}
