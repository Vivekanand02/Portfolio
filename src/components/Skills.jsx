import SkillBadge from "./SkillBadge"

function Skills() {
  const groups = [
    { title: "Backend", items: ["Spring Boot", "Hibernate/JPA", "Spring Security", "JWT Auth", "REST APIs"] },
    { title: "Language", items: ["Java"] },
    { title: "Database", items: ["PostgreSQL", "MySQL", "Oracle SQL"] },
    { title: "Tools", items: ["Git & GitHub", "Maven", "Postman", "IntelliJ IDEA", "Eclipse", "VS Code"] },
    { title: "Core Concepts", items: ["OOP", "DBMS", "Collections", "Exception Handling"] },
  ]

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head"><span className="idx">03</span><h2>Skills</h2></div>
        <div className="skills-grid">
          {groups.map(group => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map(item => <SkillBadge key={item} skill={item} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
