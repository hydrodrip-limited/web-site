import {FC} from "react";

interface Props {
    width: number;
    height: number;
}
const Logo: FC<Props> = ({width,height}) => {
    return <svg width={width} height={height} viewBox="0 0 100 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M36.4969 49.2048C37.5338 49.5194 38.9462 49.8136 39.8267 49.9096C40.8379 50.0145 43.4013 49.8686 44.483 49.6537C47.8871 48.9592 50.0096 47.8106 52.5729 45.2627C54.1904 43.6536 54.9414 42.6188 55.4426 41.3103C56.0232 39.7908 56.1577 38.9569 56.1577 36.8886C56.1526 34.8101 56.018 33.8853 55.4426 32.0971C55.026 30.7925 52.7985 26.381 48.7433 18.8216C47.0963 15.7531 45.4737 12.6654 45.1341 11.9568C43.5218 8.58902 42.1452 4.35141 41.639 1.1793C41.5339 0.529534 41.4185 0 41.3839 0C41.348 0 41.234 0.54486 41.1237 1.20358C40.588 4.44732 39.2563 8.54934 37.6543 11.9018C37.3031 12.6411 35.6715 15.7531 34.0246 18.8216C32.3815 21.8837 30.2744 25.8911 29.3478 27.7201C27.1202 32.1163 26.7191 33.366 26.5896 36.3092C26.514 38.0231 26.6396 39.1461 27.0549 40.5352C27.5957 42.3438 28.4224 43.5692 30.3898 45.4725C32.352 47.3808 34.2091 48.5102 36.4969 49.2048ZM47.0912 38.8419C47.1565 38.682 47.1912 38.5221 47.1912 38.3622V34.0261C47.1912 33.2958 47.0566 32.6064 46.7913 31.9668C46.5349 31.317 46.1799 30.7479 45.7288 30.2682C45.2738 29.7783 44.7329 29.3895 44.1074 29.1093C43.4769 28.8292 42.795 28.6898 42.0645 28.6898C41.5544 28.6898 41.0686 28.7845 40.6021 28.9687C40.1317 29.1439 39.7011 29.3984 39.3012 29.7284V25.9513C39.3012 25.7812 39.2666 25.6111 39.2012 25.4512C39.1307 25.2913 39.041 25.1621 38.9205 25.0521C38.8103 24.9319 38.6796 24.8424 38.5194 24.772C38.3694 24.7068 38.2092 24.6722 38.0387 24.6722C37.8644 24.6722 37.6991 24.7068 37.5389 24.772C37.3889 24.8424 37.2582 24.9319 37.1377 25.0521C37.0275 25.1621 36.9429 25.2913 36.8776 25.4512C36.8084 25.6111 36.7776 25.7812 36.7776 25.9513V38.343C36.7776 38.5029 36.8084 38.6628 36.8776 38.8226C36.9429 38.9723 37.0275 39.1015 37.1377 39.2217C37.2582 39.3317 37.3889 39.4162 37.5389 39.4814C37.6991 39.5517 37.8644 39.5812 38.0387 39.5812C38.2092 39.5812 38.3694 39.5517 38.5194 39.4814C38.6796 39.4162 38.8103 39.3317 38.9205 39.2217C39.041 39.1015 39.1307 38.9723 39.2012 38.8226C39.2666 38.6628 39.3012 38.5029 39.3012 38.343V33.9455C39.3012 33.5465 39.3666 33.1806 39.5011 32.8468C39.646 32.5015 39.8421 32.2073 40.0817 31.9668C40.3329 31.7276 40.6277 31.5421 40.9635 31.4078C41.3083 31.2774 41.6736 31.2071 42.0645 31.2071C42.4503 31.2071 42.8053 31.2825 43.1257 31.427C43.4461 31.5626 43.7165 31.7571 43.9472 32.0065C44.1728 32.2469 44.3522 32.536 44.4881 32.866C44.6175 33.2011 44.688 33.5605 44.688 33.9455V34.0057V34.085V38.3622C44.688 38.5221 44.7137 38.682 44.7675 38.8419C44.8329 38.9915 44.9277 39.122 45.0482 39.2422C45.1687 39.3522 45.2994 39.4366 45.4494 39.5018C45.5942 39.5568 45.7544 39.5812 45.93 39.5812C46.1004 39.5812 46.2607 39.5568 46.4106 39.5018C46.5708 39.4366 46.7003 39.3522 46.8105 39.2422C46.931 39.122 47.0207 38.9915 47.0912 38.8419Z"
                  fill="currentColor"/>
            <g opacity="0.35939">
                <path
                    d="M45.4239 46.9116C47.2772 46.3769 49.1946 45.2474 50.7313 43.7931C53.3139 41.3347 54.3456 38.3775 53.6394 35.4395C52.9294 32.4669 50.6313 27.8354 47.6873 23.4328C47.2118 22.7293 46.8107 22.1985 46.7915 22.2586C46.7658 22.3238 47.0209 22.9481 47.3567 23.6528C49.6252 28.4698 50.7159 32.1715 50.9069 35.7094C51.1222 39.6464 49.715 43.0795 47.026 45.2027C46.2698 45.7975 44.8984 46.5611 43.9321 46.9167C42.6299 47.4014 43.7373 47.3964 45.4239 46.9116Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M59.0069 46.9511C57.615 46.8462 55.7771 46.451 56.0027 46.3065C56.0283 46.286 56.3885 46.107 56.7986 45.9023C57.3651 45.6171 57.8701 45.218 58.8659 44.2625C60.3181 42.8645 60.9692 42.4692 61.8202 42.4641C62.4662 42.4641 62.8417 42.61 63.2928 43.0346C64.2784 43.9684 64.2989 45.1527 63.3377 46.0174C62.5007 46.7708 60.964 47.1008 59.0069 46.9511Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.486691">
                <path
                    d="M63.3621 44.4223C63.2275 43.889 62.8763 43.4489 62.3906 43.2136C62.1304 43.0882 61.8651 43.0141 61.81 43.0486C61.71 43.1139 63.1622 44.6871 63.3429 44.7076C63.3929 44.7127 63.4031 44.5822 63.3621 44.4223Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M20.9927 46.8066C19.1547 46.3116 18.314 45.0978 18.9151 43.8085C19.5098 42.5294 20.7825 42.12 22.1039 42.7839C22.5448 43.0039 23.0549 43.4183 23.7611 44.1384C24.7967 45.1924 25.7336 45.8972 26.3987 46.1121C26.8755 46.272 26.8653 46.3717 26.3693 46.5213C24.8928 46.9562 22.1141 47.1059 20.9927 46.8066Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.492753">
                <path
                    d="M20.9516 43.0641C20.9067 43.0091 20.6517 43.0794 20.3569 43.2291C19.9762 43.4286 19.7852 43.6192 19.5904 43.9888C19.4507 44.2625 19.3649 44.5376 19.4007 44.5977C19.4353 44.6527 19.8211 44.3585 20.2518 43.9339C20.6824 43.5092 20.9977 43.1191 20.9516 43.0641Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M24.6775 41.4997C23.7354 40.8807 21.7629 40.3409 18.9792 39.9367C17.9179 39.782 16.7862 39.5568 16.4709 39.4366C15.5456 39.0963 14.8547 38.4568 14.3587 37.4886C13.9678 36.7288 13.9332 36.5791 13.9332 35.8347C13.9332 35.135 13.9884 34.9099 14.2831 34.3049C15.0598 32.692 16.7914 31.8325 18.7395 32.087C21.2721 32.4221 23.5752 35.5444 24.8877 40.4407C25.2632 41.8451 25.2581 41.8847 24.6775 41.4997Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.497949">
                <path
                    d="M17.1169 33.7959C17.4924 33.6207 18.1038 33.3905 18.4742 33.2856C19.3957 33.0311 19.2752 32.866 18.164 32.8711C17.1374 32.8814 16.5517 33.0861 15.8762 33.6757C15.4046 34.0901 14.8445 35.0098 14.8445 35.3743C14.8445 35.5995 14.9393 35.5342 15.6353 34.8755C16.1313 34.4099 16.6914 34.0006 17.1169 33.7959Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M57.6599 41.3206C57.8406 40.3715 58.5263 38.2521 59.0018 37.1931C60.3591 34.1604 62.106 32.3773 64.0234 32.0768C65.8908 31.7877 67.7082 32.6869 68.4888 34.3049C68.7797 34.9099 68.8297 35.135 68.8348 35.8347C68.8348 36.5791 68.7989 36.7288 68.4093 37.4885C67.9133 38.4568 67.2225 39.0963 66.2958 39.4417C65.9805 39.5568 65.0001 39.7563 64.1131 39.8868C61.1602 40.3115 59.4273 40.7553 58.2802 41.3999C57.9752 41.5752 57.6894 41.7146 57.6548 41.7146C57.6151 41.7146 57.6202 41.5355 57.6599 41.3206Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.492753">
                <path
                    d="M67.6633 34.6951C67.3326 34.021 66.702 33.416 66.0061 33.1014C65.6306 32.9364 65.2794 32.8762 64.604 32.8711C64.0836 32.8711 63.6876 32.9159 63.6632 32.976C63.6427 33.0361 64.0477 33.2165 64.5693 33.3713C65.6459 33.7013 66.5559 34.2551 67.3326 35.0596C67.9735 35.7145 68.0991 35.5789 67.6633 34.6951Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M2.64297 56.8794H9.27176V52.7019C9.27176 52.542 9.2974 52.4026 9.35251 52.2824C9.41659 52.1519 9.49733 52.0419 9.59218 51.9626C9.69727 51.8731 9.81774 51.7976 9.95231 51.7426C10.083 51.6774 10.2228 51.6428 10.374 51.6428C10.5188 51.6428 10.6534 51.6774 10.7739 51.7426C10.9046 51.7976 11.0187 51.8731 11.1148 51.9626C11.2045 52.0419 11.2801 52.1519 11.3352 52.2824C11.3852 52.4026 11.4147 52.542 11.4147 52.7019V63.1545C11.4147 63.2888 11.3801 63.4244 11.3147 63.5536C11.2596 63.6892 11.184 63.8043 11.0943 63.8938C10.9994 63.9885 10.8841 64.0639 10.7534 64.1138C10.6342 64.1688 10.4983 64.1931 10.3535 64.1931C10.2035 64.1931 10.0625 64.1688 9.93309 64.1138C9.79723 64.0639 9.68189 63.9885 9.59218 63.8938C9.49733 63.8043 9.41659 63.6892 9.35251 63.5536C9.2974 63.4244 9.27176 63.2888 9.27176 63.1545V59.018H2.64297V63.1545C2.64297 63.2888 2.60836 63.4244 2.54299 63.5536C2.48788 63.6892 2.41355 63.8043 2.32255 63.8938C2.22771 63.9885 2.11236 64.0639 1.98291 64.1138C1.86243 64.1688 1.72273 64.1931 1.56252 64.1931C1.42666 64.1931 1.29208 64.1688 1.16135 64.1138C1.02677 64.0639 0.911416 63.9885 0.820417 63.8938C0.725574 63.8043 0.646115 63.6892 0.58075 63.5536C0.525638 63.4244 0.5 63.2888 0.5 63.1545V52.7019C0.5 52.542 0.525638 52.4026 0.58075 52.2824C0.646115 52.1519 0.725574 52.0419 0.820417 51.9626C0.911416 51.8731 1.02677 51.7976 1.16135 51.7426C1.29208 51.6774 1.42666 51.6428 1.56252 51.6428C1.72273 51.6428 1.86243 51.6774 1.98291 51.7426C2.11236 51.7976 2.22771 51.8731 2.32255 51.9626C2.41355 52.0419 2.48788 52.1519 2.54299 52.2824C2.60836 52.4026 2.64297 52.542 2.64297 52.7019V56.8794Z"
                    fill="currentColor"/>
                <path
                    d="M18.2242 57.2388L22.0487 52.0023C22.1538 51.8833 22.2743 51.7976 22.4088 51.7426C22.5537 51.6774 22.6998 51.6428 22.8497 51.6428C23.0996 51.6428 23.3304 51.7324 23.5303 51.9025C23.6508 51.9971 23.7405 52.102 23.811 52.2222C23.8763 52.3322 23.9161 52.4576 23.9315 52.6021C23.9404 52.7364 23.9314 52.8771 23.8904 53.0217C23.8507 53.1573 23.7764 53.2915 23.6713 53.422L19.2854 59.0768V63.1545C19.2854 63.2888 19.2546 63.4244 19.2047 63.5536C19.1495 63.6892 19.0701 63.8043 18.965 63.8938C18.8689 63.9885 18.7548 64.0639 18.6241 64.1138C18.5036 64.1688 18.369 64.1931 18.2242 64.1931C18.0729 64.1931 17.9332 64.1688 17.8025 64.1138C17.6833 64.0639 17.568 63.9885 17.4629 63.8938C17.368 63.8043 17.2924 63.6892 17.2424 63.5536C17.1873 63.4244 17.1617 63.2888 17.1617 63.1545V59.0973L12.7361 53.4412C12.6412 53.3363 12.5759 53.2161 12.5361 53.0818C12.4964 52.9372 12.4861 52.7965 12.4964 52.6622C12.4964 52.5318 12.531 52.3975 12.5964 52.2619C12.6463 52.1327 12.7361 52.0176 12.8565 51.9229C12.9616 51.8321 13.077 51.7631 13.1975 51.7221C13.3167 51.6723 13.4423 51.6428 13.5781 51.6428C13.723 51.6428 13.8627 51.6774 13.9985 51.7426C14.128 51.7976 14.2484 51.8922 14.3587 52.0227L18.2242 57.2388Z"
                    fill="currentColor"/>
                <path
                    d="M26.0436 64.1931C25.9091 64.1931 25.7732 64.1688 25.6438 64.1138C25.5079 64.0639 25.3926 63.9885 25.3028 63.8938C25.208 63.8043 25.1272 63.6892 25.0619 63.5536C25.0068 63.4244 24.9824 63.2888 24.9824 63.1545V52.7019C24.9824 52.542 25.0068 52.4026 25.0619 52.2824C25.1272 52.1519 25.208 52.0381 25.3028 51.9421C25.3926 51.8526 25.5079 51.7771 25.6438 51.7221C25.7732 51.6723 25.9091 51.6428 26.0436 51.6428H29.4888C30.0745 51.6428 30.6346 51.7221 31.1703 51.8833C31.7163 52.0329 32.2213 52.2427 32.693 52.5228C33.1582 52.7914 33.5837 53.1163 33.9746 53.5013C34.3745 53.8914 34.7154 54.3161 34.9948 54.7804C35.2755 55.2358 35.4857 55.7346 35.6357 56.2795C35.7959 56.8141 35.8766 57.3692 35.8766 57.9384C35.8766 58.8082 35.701 59.6166 35.3562 60.3764C35.0205 61.1361 34.5603 61.8051 33.9746 62.3755C33.3979 62.9345 32.7224 63.3847 31.9509 63.7147C31.1754 64.0345 30.3539 64.1931 29.4888 64.1931H26.0436ZM27.1254 53.7814V62.075H29.5477C30.1334 62.075 30.6794 61.965 31.1908 61.736C31.6958 61.5109 32.1367 61.2103 32.5122 60.8368C32.898 60.4518 33.1979 60.0118 33.4132 59.5168C33.6388 59.0269 33.7542 58.5076 33.7542 57.9589C33.7542 57.414 33.6388 56.8896 33.4132 56.3792C33.1979 55.8753 32.898 55.4302 32.5122 55.0401C32.1367 54.6551 31.6958 54.3506 31.1908 54.1217C30.6794 53.8965 30.1334 53.7814 29.5477 53.7814H27.1254Z"
                    fill="currentColor"/>
                <path
                    d="M37.5338 52.7224C37.5338 52.5625 37.5582 52.4218 37.6133 52.3028C37.6786 52.1723 37.7594 52.0572 37.8542 51.9626C37.9439 51.8731 38.0593 51.7976 38.1952 51.7426C38.3246 51.6774 38.4605 51.6428 38.595 51.6428H42.2004C42.8502 51.6428 43.4615 51.7631 44.0216 52.0023C44.5932 52.2325 45.0931 52.5523 45.5238 52.9616C45.9493 53.3619 46.2851 53.8416 46.526 54.4005C46.7759 54.9608 46.9054 55.5696 46.9054 56.2194C46.9054 56.6594 46.8464 57.0789 46.7259 57.478C46.6157 57.8783 46.4504 58.248 46.2248 58.578C46.0095 58.9131 45.7544 59.2175 45.4635 59.4976C45.1687 59.7675 44.8329 59.9913 44.4625 60.1768L46.2851 62.3755C46.3902 62.4855 46.4709 62.6045 46.526 62.735C46.576 62.8693 46.6055 63.0049 46.6055 63.1341C46.6055 63.2696 46.576 63.4039 46.526 63.5344C46.4709 63.6687 46.3902 63.7838 46.2851 63.8734C46.1748 63.9834 46.0646 64.0639 45.9441 64.1138C45.8249 64.1688 45.7045 64.1931 45.584 64.1931C45.3033 64.1931 45.0636 64.0882 44.8637 63.8734L42.1401 60.7166H39.6768V63.1545C39.6768 63.2888 39.6409 63.4244 39.5768 63.5536C39.5217 63.6892 39.4461 63.8043 39.3563 63.8938C39.2615 63.9885 39.1462 64.0639 39.0154 64.1138C38.895 64.1688 38.7552 64.1931 38.595 64.1931C38.4605 64.1931 38.3246 64.1688 38.1952 64.1138C38.0593 64.0639 37.9439 63.9885 37.8542 63.8938C37.7594 63.8043 37.6786 63.6892 37.6133 63.5536C37.5582 63.4244 37.5338 63.2888 37.5338 63.1545V52.7224ZM39.6768 53.7814V58.578H42.2196C42.5798 58.578 42.9104 58.5179 43.2206 58.3976C43.5269 58.2684 43.7922 58.0932 44.0216 57.8783C44.2626 57.6685 44.4471 57.4191 44.583 57.139C44.7137 56.8487 44.7829 56.5391 44.7829 56.2194C44.7829 55.8894 44.7137 55.5747 44.583 55.2805C44.4471 54.9748 44.2626 54.7152 44.0216 54.5003C43.7922 54.2765 43.5269 54.1012 43.2206 53.981C42.9104 53.8518 42.5849 53.7814 42.2401 53.7814H39.6768Z"
                    fill="currentColor"/>
                <path
                    d="M54.4904 51.5634C55.3722 51.5634 56.1976 51.7323 56.9742 52.0623C57.7599 52.3974 58.4405 52.8566 59.0172 53.4411C59.5876 54.0154 60.0426 54.6908 60.3784 55.4595C60.7244 56.2346 60.8987 57.0583 60.8987 57.9383C60.8987 58.528 60.8193 59.0921 60.659 59.637C60.4988 60.187 60.2784 60.6909 59.9977 61.1565C59.7273 61.6259 59.3979 62.0557 58.9967 62.4548C58.6058 62.8449 58.1803 63.1749 57.7151 63.4537C57.2447 63.7236 56.7384 63.9334 56.1937 64.0933C55.6426 64.2391 55.0761 64.3133 54.4904 64.3133C53.6099 64.3133 52.7742 64.1482 51.9873 63.8144C51.2119 63.4844 50.5351 63.0291 49.9648 62.4548C49.3893 61.8702 48.9331 61.191 48.6037 60.4159C48.2833 59.6472 48.123 58.8171 48.123 57.9383C48.123 57.3538 48.1923 56.7884 48.3435 56.2397C48.4883 55.6948 48.7036 55.1896 48.9843 54.7202C49.2637 54.2405 49.5944 53.8108 49.9853 53.4219C50.3711 53.0369 50.7966 52.712 51.267 52.4422C51.7322 52.162 52.2385 51.9523 52.7883 51.8026C53.3343 51.6427 53.8995 51.5634 54.4904 51.5634ZM54.4904 53.6816C53.8995 53.6816 53.3497 53.7967 52.8293 54.0205C52.3179 54.2508 51.8719 54.5552 51.4874 54.9402C51.1119 55.315 50.8107 55.7601 50.5864 56.2794C50.3557 56.7987 50.2455 57.3538 50.2455 57.9383C50.2455 58.5382 50.3557 59.0972 50.5864 59.6165C50.8107 60.1269 51.1119 60.5707 51.4874 60.9557C51.8719 61.3458 52.3179 61.6451 52.8293 61.8549C53.3497 62.0698 53.8995 62.1747 54.4904 62.1747C55.0761 62.1747 55.6323 62.0698 56.1527 61.8549C56.6743 61.6451 57.1242 61.3458 57.5151 60.9557C57.9009 60.5707 58.2008 60.1269 58.4161 59.6165C58.6417 59.0972 58.7571 58.5382 58.7571 57.9383C58.7571 57.3538 58.6417 56.7987 58.4161 56.2794C58.2008 55.7601 57.9009 55.315 57.5151 54.9402C57.1242 54.5552 56.6743 54.2508 56.1527 54.0205C55.6323 53.7967 55.0761 53.6816 54.4904 53.6816Z"
                    fill="currentColor"/>
            </g>
            <g opacity="0.865999">
                <path
                    d="M63.0173 63.8491C62.8814 63.8491 62.7468 63.8234 62.6161 63.7684C62.4815 63.7185 62.3662 63.6444 62.2765 63.5497C62.1803 63.4589 62.1009 63.3438 62.0355 63.2095C61.9804 63.0791 61.9561 62.9447 61.9561 62.8091V52.3578C61.9561 52.1979 61.9804 52.0572 62.0355 51.937C62.1009 51.8078 62.1803 51.6927 62.2765 51.5981C62.3662 51.5085 62.4815 51.4331 62.6161 51.3781C62.7468 51.3282 62.8814 51.2974 63.0173 51.2974H66.4611C67.0468 51.2974 67.6082 51.3781 68.1439 51.538C68.6899 51.6876 69.1949 51.8974 69.6653 52.1775C70.1318 52.4474 70.5573 52.7723 70.947 53.1573C71.3481 53.5461 71.6878 53.9707 71.9685 54.4363C72.2491 54.8904 72.4593 55.3905 72.6093 55.9341C72.7695 56.4687 72.8502 57.0238 72.8502 57.593C72.8502 58.4628 72.6746 59.2725 72.3286 60.0323C71.9941 60.7908 71.5327 61.461 70.947 62.0301C70.3715 62.5904 69.6961 63.0394 68.9245 63.3694C68.1491 63.6892 67.3275 63.8491 66.4611 63.8491H63.0173ZM64.0977 53.436V61.7309H66.5214C67.1071 61.7309 67.6531 61.6208 68.1632 61.3906C68.6694 61.1655 69.1103 60.8663 69.4859 60.4915C69.8704 60.1065 70.1715 59.6665 70.3869 59.1728C70.6124 58.6829 70.7265 58.1636 70.7265 57.6136C70.7265 57.0687 70.6124 56.5442 70.3869 56.0352C70.1715 55.5299 69.8704 55.0848 69.4859 54.696C69.1103 54.311 68.6694 54.0066 68.1632 53.7763C67.6531 53.5512 67.1071 53.436 66.5214 53.436H64.0977Z"
                    fill="currentColor"/>
                <path
                    d="M74.5074 52.377C74.5074 52.2171 74.5318 52.0776 74.5869 51.9574C74.6523 51.8282 74.7317 51.7131 74.8279 51.6172C74.9176 51.5277 75.0329 51.4535 75.1675 51.3985C75.2982 51.3333 75.4328 51.2974 75.5687 51.2974H79.1727C79.8238 51.2974 80.4352 51.4177 80.9953 51.6582C81.5656 51.8871 82.0667 52.2069 82.4974 52.6175C82.9229 53.0166 83.2587 53.4962 83.4984 54.0564C83.7496 54.6154 83.879 55.2255 83.879 55.8753C83.879 56.314 83.8188 56.7336 83.6983 57.1339C83.5893 57.533 83.424 57.9038 83.1984 58.2326C82.9831 58.5677 82.7281 58.8721 82.4371 59.1522C82.1423 59.4221 81.8065 59.6472 81.4361 59.8314L83.2587 62.0301C83.3638 62.1401 83.4432 62.2604 83.4984 62.3896C83.5483 62.5252 83.5791 62.6595 83.5791 62.79C83.5791 62.9243 83.5483 63.0598 83.4984 63.189C83.4432 63.3246 83.3638 63.4398 83.2587 63.5293C83.1484 63.6393 83.0382 63.7185 82.9178 63.7684C82.7973 63.8234 82.6781 63.8491 82.5576 63.8491C82.2769 63.8491 82.0372 63.7442 81.836 63.5293L79.1125 60.3712H76.6491V62.8091C76.6491 62.9447 76.6145 63.0791 76.5491 63.2095C76.494 63.3438 76.4197 63.4589 76.3287 63.5497C76.2338 63.6444 76.1185 63.7185 75.989 63.7684C75.8686 63.8234 75.7289 63.8491 75.5687 63.8491C75.4328 63.8491 75.2982 63.8234 75.1675 63.7684C75.0329 63.7185 74.9176 63.6444 74.8279 63.5497C74.7317 63.4589 74.6523 63.3438 74.5869 63.2095C74.5318 63.0791 74.5074 62.9447 74.5074 62.8091V52.377ZM76.6491 53.436V58.2326H79.1932C79.5534 58.2326 79.884 58.1725 80.1942 58.0536C80.4992 57.9231 80.7646 57.7478 80.9953 57.5329C81.2362 57.3232 81.4208 57.0737 81.5566 56.7936C81.6861 56.5045 81.7566 56.1951 81.7566 55.8753C81.7566 55.5453 81.6861 55.2306 81.5566 54.9351C81.4208 54.6307 81.2362 54.3711 80.9953 54.1562C80.7646 53.9311 80.4992 53.7559 80.1942 53.6369C79.884 53.5064 79.5585 53.436 79.2124 53.436H76.6491Z"
                    fill="currentColor"/>
                <path
                    d="M87.7792 62.8091C87.7792 62.9447 87.7446 63.0791 87.6792 63.2095C87.6241 63.3438 87.5485 63.4589 87.4588 63.5497C87.3639 63.6444 87.2486 63.7185 87.1178 63.7684C86.9986 63.8234 86.8577 63.8491 86.6975 63.8491C86.5629 63.8491 86.427 63.8234 86.2976 63.7684C86.1617 63.7185 86.0476 63.6444 85.9566 63.5497C85.8618 63.4589 85.781 63.3438 85.717 63.2095C85.6618 63.0791 85.6362 62.9447 85.6362 62.8091V52.3578C85.6362 52.1979 85.6618 52.0572 85.717 51.937C85.781 51.8078 85.8618 51.6927 85.9566 51.5981C86.0476 51.5085 86.1617 51.4331 86.2976 51.3781C86.427 51.3282 86.5629 51.2974 86.6975 51.2974C86.8577 51.2974 86.9986 51.3282 87.1178 51.3781C87.2486 51.4331 87.3639 51.5085 87.4588 51.5981C87.5485 51.6927 87.6241 51.8078 87.6792 51.937C87.7446 52.0572 87.7792 52.1979 87.7792 52.3578V62.8091Z"
                    fill="currentColor"/>
                <path
                    d="M94.7936 51.2974C95.4447 51.2974 96.0599 51.4279 96.6354 51.6773C97.207 51.9178 97.7017 52.2529 98.117 52.6776C98.5438 53.092 98.8783 53.587 99.1193 54.1562C99.3692 54.7305 99.4999 55.3457 99.4999 55.9942C99.4999 56.6337 99.3692 57.2438 99.1193 57.813C98.8783 58.3733 98.5438 58.867 98.117 59.2916C97.7017 59.7073 97.207 60.0322 96.6354 60.2714C96.0599 60.5119 95.4447 60.6308 94.7936 60.6308H92.27V62.8091C92.27 62.9447 92.2354 63.0791 92.17 63.2095C92.1149 63.3438 92.0393 63.4589 91.9496 63.5497C91.8548 63.6444 91.7394 63.7185 91.6087 63.7684C91.4895 63.8234 91.3485 63.8491 91.1883 63.8491C91.0537 63.8491 90.9179 63.8234 90.7884 63.7684C90.6525 63.7185 90.5372 63.6444 90.4475 63.5497C90.3526 63.4589 90.2719 63.3438 90.2078 63.2095C90.1527 63.0791 90.1271 62.9447 90.1271 62.8091V52.377C90.1271 52.2171 90.1527 52.0776 90.2078 51.9574C90.2719 51.8282 90.3526 51.7131 90.4475 51.6172C90.5372 51.5277 90.6525 51.4535 90.7884 51.3985C90.9179 51.3333 91.0537 51.2974 91.1883 51.2974H94.7936ZM92.27 53.436V58.5127H94.8334C95.1781 58.5127 95.5037 58.4475 95.8151 58.3132C96.1355 58.1687 96.406 57.9832 96.6354 57.7529C96.861 57.5137 97.0417 57.249 97.1763 56.9535C97.307 56.6491 97.3762 56.3293 97.3762 55.9942C97.3762 55.6655 97.307 55.3457 97.1763 55.0349C97.0417 54.7305 96.8558 54.4555 96.6162 54.2163C96.3855 53.9759 96.1202 53.7916 95.8151 53.656C95.5037 53.5115 95.1781 53.436 94.8334 53.436H92.27Z"
                    fill="currentColor"/>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_204_1004">
                <rect width="99" height="64.3133" fill="white" transform="translate(0.5)"/>
            </clipPath>
        </defs>
    </svg>


}

export default Logo;