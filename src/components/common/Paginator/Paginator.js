import React from 'react';
import classes from './Paginator.module.css';

const Paginator = props => {

    let countPage = Math.ceil(props.totalUsers/props.pageSize);

    let pages = [];

    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }

    return (
          <div className={classes.pagination}>
            {pages.map(page => {
              return <span className={props.currentPage === page ? classes.currentPage : ''}
                            onClick={(evt) => props.onPageChanged(page)}> {page} </span>
              })
            }
          </div>
        )
}

export default Paginator;