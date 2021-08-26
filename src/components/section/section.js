import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ title, children }) => (
  <div className={css.feedback}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
