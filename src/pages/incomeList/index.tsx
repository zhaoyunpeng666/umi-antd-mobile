import {
  LeftOutline,
  RightOutline,
  QuestionCircleOutline,
} from 'antd-mobile-icons';
import styles from './index.less';
import {
  ZYP_INCOME_LIST_2025,
  // ZYP_INCOME_LIST_2024,
  // ZYP_INCOME_LIST_2023,
  // ZYP_INCOME_LIST_2022,
} from './income';
import { useMemo } from 'react';
import maxDecimal from '@/utils/maxDecimal';

const Income = () => {
  const list = [
    ...ZYP_INCOME_LIST_2025,
    // ...ZYP_INCOME_LIST_2024,
    // ...ZYP_INCOME_LIST_2023,
    // ...ZYP_INCOME_LIST_2022,
  ];

  // 收入合计
  const income = useMemo(() => {
    let total = 0;
    list?.forEach((item) => {
      total += item.income;
    });
    return maxDecimal(total, 2);
  }, [list]);

  // 已申报税额合计
  const declaredAmount = useMemo(() => {
    let total = 0;
    list?.forEach((item) => {
      total += item.tax;
    });
    return maxDecimal(total, 2);
  }, [list]);

  return (
    <div className={styles.income}>
      <div className={styles.body}>
        {/* 吸顶头部 */}
        <div className={styles.stickyHeader}>
          <div className={styles.headerWrap}>
            <div className={styles.back}>
              <LeftOutline />
              <div>返回</div>
            </div>
            <div className={styles.center}>收入纳税明细</div>
            <div className={styles.right}>批量申诉</div>
          </div>
          <div className={styles.totalWrap}>
            <div className={styles.topWrap}>
              <div className={styles.left}>
                收入合计 &nbsp;
                <QuestionCircleOutline color="#4f82d8" fontSize={16} /> ：
              </div>
              <div className={styles.right}>{income}元</div>
            </div>
            <div className={styles.bottomWrap}>
              <div className={styles.left}>已申报税额合计：</div>
              <div className={styles.right}>{declaredAmount}元</div>
            </div>
          </div>
        </div>
        {/* 可滚动列表 */}
        <div className={styles.scrollableList}>
          {list?.map((item, index) => (
            <div className={styles.detailWrap} key={index}>
              <div className={styles.leftWrap}>
                <div className={styles.topWrap}>
                  <div className={styles.left}>工资薪金 </div>
                  <div className={styles.right}>{item.date}</div>
                </div>
                <div className={styles.bottomWrap}>
                  <div className={styles.oneLine}>
                    <div className={styles.left}>所得项目小类：{item.type}</div>
                    {/* <div className={styles.right}></div> */}
                  </div>
                  <div className={styles.oneLine}>
                    <div className={styles.left}>
                      扣缴义务人：{item.company}
                    </div>
                    {/* <div className={styles.right}></div> */}
                  </div>
                  <div className={styles.oneLine}>
                    <div className={styles.left}>
                      收入：{item.income.toFixed(2)}元
                    </div>
                    {/* <div className={styles.right}></div> */}
                  </div>
                  <div className={styles.oneLine}>
                    <div className={styles.left}>
                      已申报税额：{item.tax.toFixed(2)}元
                    </div>
                    {/* <div className={styles.right}></div> */}
                  </div>
                </div>
              </div>
              <div className={styles.rightWrap}>
                <RightOutline color="#9d9d9d" fontSize={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
