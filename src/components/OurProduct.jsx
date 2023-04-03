import React from 'react'
import ProductCard from './ProductCard';
import { useTranslation } from "react-i18next";

const OurProduct = () => {
  const {t} = useTranslation();

  return (
    <>
        <div className='col-12 productPage'>
            <svg className='productSvg' width="1349" height="311" viewBox="0 0 1440 321" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M863.577 306.088C870.655 306.386 878.465 305.211 885.543 306.141C886.031 306.211 890.912 306.246 891.4 306.193C898.234 305.387 904.092 305.351 914.83 305.983C925.081 306.579 933.867 306.334 939.237 305.544C946.559 304.422 954.125 303.352 967.06 302.492C972.43 302.124 975.114 301.422 976.09 300.861C980.24 298.317 983.901 295.774 986.829 293.23C988.782 291.599 989.514 289.95 990.978 288.318C992.931 286.178 1009.04 284.722 1034.18 283.687C1052.73 282.915 1070.54 282.073 1089.09 281.337C1100.32 280.898 1112.28 280.53 1124.48 280.267C1135.22 280.039 1147.18 280.039 1158.16 279.863C1189.89 279.337 1217.47 279.425 1232.6 281.968C1233.82 282.161 1239.68 282.214 1243.34 282.337C1266.77 281.53 1257.01 279.758 1266.77 278.477C1291.91 278.021 1317.05 278.688 1342.43 278.653C1347.31 278.653 1353.17 278.933 1357.32 279.197C1381.97 280.828 1412.23 281.266 1444.2 281.354C1473 281.442 1500.83 281.74 1527.67 282.53C1558.43 283.424 1588.93 283.196 1618.47 282.091C1628.47 281.705 1632.87 281.161 1632.62 280.354C1631.4 277.39 1630.43 274.443 1629.45 271.478C1629.21 270.566 1627.98 269.584 1638.24 268.882C1646.53 268.303 1646.29 267.619 1645.8 266.9C1641.9 260.339 1637.99 253.796 1634.33 247.235C1631.16 241.394 1628.23 235.552 1625.06 229.711C1622.13 223.975 1619.2 218.239 1615.78 212.485C1614.56 210.538 1611.63 208.591 1610.66 206.661C1606.75 197.329 1602.11 187.996 1599.92 178.647C1598.7 173.735 1604.07 168.806 1603.33 163.876C1602.6 159.35 1609.44 154.86 1610.9 150.351C1613.58 141.124 1614.81 131.88 1618.47 122.653C1621.88 114.04 1628.23 105.444 1631.89 96.8312C1634.33 90.8845 1636.04 84.9378 1635.31 78.9911C1634.33 70.6763 1630.43 62.379 1627.98 54.0641C1626.52 49.4506 1625.54 44.8371 1623.84 40.2236C1623.59 39.2062 1621.88 38.1712 1620.66 37.1538C1618.71 35.7504 1608.46 34.6453 1594.79 33.7156C1590.89 33.4524 1585.03 33.1016 1580.39 33.1191C1562.09 33.2069 1548.42 32.6631 1532.8 32.0491C1520.6 31.5579 1503.76 31.6281 1489.84 32.4525C1475.69 33.2946 1460.31 34.0489 1444.69 34.7505C1440.06 34.961 1432 34.8032 1425.17 34.8207C1417.36 35.8381 1402.63 36.914 1380.99 38.0484C1380.02 37.8204 1378.55 37.5397 1377.09 37.2766C1375.62 36.9959 1373.91 36.7328 1371.47 36.2942C1350.48 37.8379 1339.5 39.4693 1340.23 41.6094C1341.21 44.574 1339.5 47.5561 1338.53 50.5382C1338.53 50.9943 1335.84 51.4329 1332.18 51.8714C1322.17 47.8543 1326.57 43.8021 1323.39 39.8201C1312.65 39.4518 1308.99 39.9078 1307.77 40.4166C1301.43 42.89 1292.4 45.3283 1294.35 47.7491C1280.44 48.2578 1274.82 47.8017 1272.87 47.1526C1270.19 46.3632 1268.72 45.5388 1268.23 44.7143C1266.53 41.855 1262.13 39.0132 1266.04 36.1363C1268.97 33.9962 1270.68 31.8386 1271.9 29.6809C1272.38 28.9792 1269.94 28.2776 1268.48 27.5934C1267.5 27.19 1262.87 26.769 1264.09 26.4357C1271.41 24.5938 1255.54 23.3308 1245.05 21.8923C1234.31 20.4364 1216.25 19.7522 1195.75 19.9803C1154.01 20.4363 1121.8 18.8225 1087.14 17.6998C1078.35 17.4191 1071.28 16.8403 1064.44 16.314C1056.63 15.7176 1050.04 15.0334 1042.72 14.4195C1014.41 12.104 999.033 9.42005 996.836 6.31513C996.348 5.61346 995.127 4.8767 991.955 4.21011C979.507 1.61391 952.416 0.140392 914.586 0.456144C895.061 0.61402 877.977 0.368433 858.696 5.24404e-05C829.164 1.52619 792.311 1.42094 757.897 1.96474C751.308 2.06999 743.498 1.31569 735.688 2.01736C724.461 2.99971 712.99 2.50853 700.786 1.89457C685.899 2.47345 671.255 3.61367 651.974 2.45591C650.509 2.3682 646.36 2.42082 644.164 2.50853C627.568 3.17512 613.412 2.56116 599.988 2.0349C587.541 1.54373 576.802 0.84205 558.986 0.929759C554.104 1.59635 549.711 2.33311 543.854 2.9997C537.02 3.78908 527.745 3.89433 514.566 3.45579C500.654 2.9997 452.574 2.59623 441.591 2.99969C422.31 3.73645 402.297 3.77154 381.063 3.78908C363.979 3.78908 347.138 4.57846 328.833 3.80662C328.101 3.43824 327.369 3.03477 326.637 2.63131C324.44 2.63131 322.244 2.57868 320.291 2.63131C297.837 3.01723 286.122 4.61354 262.692 5.24505C254.638 4.91175 245.12 4.50829 237.065 4.17499C232.184 4.40304 226.815 4.85912 221.201 4.85912C199.968 4.85912 178.49 4.70125 157.257 4.63108C143.589 4.57845 134.315 4.87666 125.528 5.78884C105.759 7.84124 63.2921 8.15699 34.9807 6.7361C25.4622 6.26247 17.4081 5.78883 13.2591 4.78895C4.71683 5.77129 1.78806 7.08693 -18.9574 6.87643C-21.398 6.85889 -24.8149 6.96414 -26.5233 7.08693C-32.3809 7.50794 -37.2621 8.3324 -43.3637 8.34995C-59.9601 8.43765 -77.2886 8.34994 -93.1527 8.03419C-115.118 7.5781 -132.203 7.70089 -144.894 9.17441C-160.514 10.9988 -189.558 11.2794 -213.72 11.9636C-227.388 12.3495 -246.181 11.8057 -263.997 11.6829C-271.075 12.1741 -280.106 12.7003 -286.939 13.3318C-292.797 13.8756 -297.922 14.5247 -300.851 15.1913C-316.959 18.84 -324.037 22.5939 -325.257 26.4181C-326.966 31.5578 -328.186 36.6801 -330.627 41.8198C-333.556 47.6613 -337.949 53.4852 -340.633 59.3266C-341.854 61.8877 -339.657 64.4488 -339.413 67.0275C-338.437 74.0092 -337.949 80.9908 -336.24 87.9725C-335.752 89.7969 -330.871 91.6212 -330.139 93.4456C-329.406 95.2699 -331.603 97.1118 -332.823 98.9537C-333.311 99.8834 -335.264 100.796 -334.532 101.725C-332.091 104.918 -334.776 108.075 -339.413 111.251C-340.877 112.356 -339.413 113.496 -339.657 114.619C-339.901 115.478 -338.193 116.232 -328.186 116.829C-319.888 117.32 -318.668 118.022 -318.668 118.776C-318.668 121.951 -317.447 125.126 -316.715 128.301C-316.715 128.81 -315.251 129.336 -315.983 129.845C-319.4 131.968 -314.763 133.88 -295.238 135.616C-283.278 136.686 -284.743 138.142 -284.011 139.475C-283.767 140.072 -285.719 140.598 -274.248 140.914C-270.099 141.037 -267.902 142.019 -268.879 142.563C-275.956 146.685 -266.438 150.737 -256.431 154.754C-253.503 155.912 -257.408 157.245 -243.008 158.351C-237.883 157.21 -233.245 156.175 -228.852 155.175C-202.737 154.877 -216.405 157.035 -201.273 157.351C-199.076 157.21 -195.904 157.088 -195.66 156.947C-192.975 154.386 -187.117 151.878 -175.158 149.439C-170.521 148.492 -170.277 147.422 -169.301 146.404C-168.08 145.106 -163.443 143.949 -146.603 143.3C-128.298 142.58 -110.725 142.756 -92.9087 143.931C-90.7121 146.387 -87.0511 149.036 -86.3189 151.685C-84.6105 158.035 -83.6343 164.402 -83.8783 170.753C-83.8783 178.243 -86.0749 185.733 -86.8071 193.224C-86.8071 195.171 -85.5868 197.118 -84.8546 199.083C-81.1936 207.398 -78.0208 215.695 -73.6277 224.01C-70.6989 229.448 -65.5736 234.868 -62.4007 240.306C-59.472 245.323 -57.5194 250.358 -55.5669 255.375C-55.3229 256.199 -53.8585 256.936 -48.9772 257.725C-44.0959 258.532 -43.6078 259.515 -42.6315 260.427C-38.2384 264.303 -34.0893 268.198 -30.1843 272.092C-27.2555 275.057 -18.7133 277.916 -2.60511 280.67C-0.408521 281.038 1.54399 281.442 2.03212 281.845C3.98464 283.284 8.37776 284.582 23.7538 285.669C29.1232 286.055 28.391 286.845 32.296 287.371C37.4213 288.073 44.7433 288.687 52.5533 289.476C79.6444 288.494 105.759 288.266 130.41 289.23C141.637 288.687 150.423 288.143 160.43 287.81C173.365 287.371 187.276 287.108 201.188 287.81C206.802 288.09 213.879 288.336 220.713 288.371C235.601 288.459 243.167 289.108 250.245 289.932C252.197 290.178 256.347 290.318 261.228 290.599C270.99 290.248 280.753 289.844 291.004 289.546C304.671 289.16 316.386 289.371 324.928 290.265C332.006 291.02 337.376 291.862 343.233 292.686C355.925 294.511 384.236 295.054 407.666 293.879C416.94 293.405 425.239 292.791 435.245 292.441C447.937 292.002 461.848 291.757 474.539 291.458C495.285 292.827 487.719 294.563 488.695 296.054C498.702 296.475 503.095 296.124 506.268 295.616C510.905 294.914 516.762 294.388 528.966 294.546C530.918 294.668 533.847 294.774 535.067 294.932C538.484 295.423 536.044 296.23 548.735 296.212C556.789 296.212 562.158 295.914 564.599 295.37C567.284 294.774 569.968 294.125 580.707 294.16C589.737 294.195 596.571 294.581 599.256 295.247C611.459 298.212 645.872 298.826 681.994 299.264C690.292 299.37 699.078 299.3 707.62 299.282C723.24 299.282 738.616 299.264 746.182 299.247C763.755 300.422 776.446 301.247 788.649 302.106C813.056 303.825 822.33 305.843 811.347 308.263C808.175 308.948 806.222 309.649 804.025 310.351C803.537 310.509 805.246 310.684 806.466 311C814.52 309.947 821.354 308.965 829.652 308.053C835.998 307.369 843.808 306.772 851.862 306.193C853.57 306.071 859.184 306.229 863.089 306.264L863.089 306.246L863.577 306.088Z" fill="#F3C24E"/>
            </svg>
                <h1 className="text-light textStory">{t('products.title')}</h1>
                <p className='paragStory'>
                  {t('products.parag')}
                </p>
        </div>

        <div className="col-4 my-5 text-center productBase">
            <h2 className='py-5'>{t('products.secondParag')}</h2>
            <p className="py-2">
              {t('products.productsParag')}
            </p>
        </div>
         <ProductCard />
    </>
  )
}

export default OurProduct