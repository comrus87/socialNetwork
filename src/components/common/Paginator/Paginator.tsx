import React, {useState} from 'react';
import classes from './Paginator.module.css';

type PropsType = {
  totalUsers: number, 
  pageSize: number, 
  currentPage:  number, 
  portialSize: number, 
  onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = props => {
  console.log(props);

    let countPage = Math.ceil(props.totalUsers/props.pageSize);

    let portionCount = Math.ceil(countPage/props.portialSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portialSize + 1;
    let rightPortionNumber = portionNumber * props.portialSize;

    let pages: Array<number> = [];

    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }

    return (
          <div className={classes.pagination}>
            {portionNumber > 1 &&
              <button onClick={() => {setPortionNumber(portionNumber - 1)}}> prev </button>
            }

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                  .map(page => {
                    return <span className={props.currentPage === page ? classes.currentPage : ''}
                                  onClick={(evt) => props.onPageChanged(page)}> {page} </span>
                    })
            }

            {portionNumber < portionCount &&
              <button onClick={() => {setPortionNumber(portionNumber + 1)}}> next </button>
            }
          </div>
        )
}

export default Paginator;