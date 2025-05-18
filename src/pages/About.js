import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      
      <h2>学歴・経歴</h2>
      <ul>
        <li>横浜国立大学 理工学部 数物電子情報系学科 物理工学EP 学部3年生</li>
        <li>Web開発を勉強中</li>
      </ul>

      <h2>スキル</h2>
      <ul>
        <li>C言語</li>
        <li>HTML / CSS / JavaScript / React</li>
        <li>Python / Flask</li>
        <li>Git / GitHub</li>
      </ul>
    </div>
  );
}

export default About;