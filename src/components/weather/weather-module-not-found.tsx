const WeatherModuleNotFound = () => {
  return (
    <div className="flex flex-col gap-10 p-[20px_30px_70px]">
      <div className="flex justify-center">
        <svg
          width="158"
          height="158"
          viewBox="0 0 158 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_108_0)">
            <path
              d="M-0.00991821 158V0H157.987V158H-0.00991821ZM60.4266 55.248C58.5745 54.819 56.6112 54.2418 54.5923 53.9085C40.1731 51.5319 25.9175 61.9086 23.8461 76.3317C23.6517 77.7052 23.0929 78.1836 21.8859 78.591C8.98242 82.9121 1.24956 96.7457 4.30874 109.913C7.27222 122.672 18.0426 131.32 31.1653 131.336C63.0639 131.367 94.9625 131.367 126.861 131.336C128.251 131.36 129.64 131.266 131.013 131.055C141.098 129.286 148.439 123.805 152.292 114.302C156.224 104.595 154.625 95.4525 148.254 87.1714C147.575 86.2918 147.47 85.5572 147.757 84.514C149.609 77.7237 150.066 70.81 148.51 63.9087C144.222 44.8743 132.634 32.3617 113.683 27.9666C94.7321 23.5714 78.9237 29.9111 66.7858 45.041C64.31 48.1306 62.5536 51.8004 60.4359 55.248H60.4266Z"
              fill="white"
            />
            <path
              d="M60.4366 55.248C62.5542 51.8004 64.3107 48.1306 66.7895 45.041C78.9275 29.9172 94.7451 23.5714 113.687 27.9666C132.628 32.3617 144.226 44.8743 148.514 63.9087C150.057 70.81 149.628 77.7114 147.761 84.514C147.473 85.5572 147.578 86.2918 148.258 87.1715C154.629 95.4525 156.228 104.595 152.295 114.302C148.443 123.805 141.102 129.286 131.017 131.055C129.643 131.266 128.254 131.36 126.865 131.336C94.9663 131.348 63.0677 131.348 31.1691 131.336C18.0526 131.32 7.28215 122.672 4.31249 109.913C1.25331 96.7457 8.98613 82.9214 21.8896 78.591C23.0966 78.1867 23.6554 77.7052 23.8499 76.3317C25.9212 61.9086 40.1768 51.5319 54.596 53.9085C56.6211 54.2418 58.5967 54.819 60.4366 55.248ZM78.8256 123.935C94.7728 123.935 110.72 123.993 126.674 123.913C135.388 123.87 141.735 119.792 145.325 111.876C148.684 104.453 146.949 96.221 140.979 90.1592C139.435 88.5851 139.188 86.9492 139.886 84.9615C142.448 77.6682 142.825 70.2205 140.688 62.816C136.53 48.4207 127.174 38.8773 112.619 35.2846C97.9771 31.6704 85.2959 35.9205 74.8959 46.8065C70.9662 50.9208 68.299 55.819 66.5858 61.245C65.9159 63.3685 64.6503 64.5321 62.9308 64.4025C61.9584 64.3253 60.9613 63.8685 60.0816 63.3901C47.1688 56.3962 31.1907 65.5198 30.8758 80.0942C30.8048 83.3134 30.0176 84.2455 26.8628 84.8659C16.1356 86.9708 9.1127 97.8291 11.5884 108.45C13.7493 117.709 21.5933 123.916 31.3049 123.938C47.1348 123.962 62.9802 123.935 78.8256 123.935Z"
              fill="#555555"
            />
            <path
              d="M78.8255 123.935C62.9802 123.935 47.1348 123.962 31.2863 123.935C21.5747 123.913 13.7277 117.697 11.5699 108.447C9.10033 97.8167 16.117 86.9678 26.8442 84.8628C30.0083 84.2455 30.7955 83.3195 30.8572 80.0911C31.1659 65.5167 47.1502 56.3931 60.063 63.387C60.9428 63.8654 61.9398 64.313 62.9122 64.3994C64.6317 64.529 65.8974 63.3654 66.5672 61.2419C68.2805 55.8159 70.9476 50.9177 74.8773 46.8034C85.2773 35.9174 97.9585 31.6796 112.6 35.2816C127.155 38.8742 136.512 48.4176 140.67 62.813C142.806 70.2205 142.429 77.6651 139.867 84.9585C139.169 86.9462 139.41 88.582 140.96 90.1561C146.93 96.2179 148.677 104.45 145.306 111.873C141.716 119.805 135.369 123.882 126.655 123.91C110.72 123.993 94.7605 123.935 78.8255 123.935ZM89.2379 86.0943C88.4538 85.2085 87.7716 84.443 87.0986 83.6745C83.2955 79.3534 79.4944 75.0251 75.6954 70.6897C74.0315 68.8038 71.7811 68.5507 70.1388 70.0322C68.4966 71.5138 68.4595 73.6311 70.0894 75.5107C72.1762 77.9213 74.2908 80.3071 76.393 82.7053L83.6474 90.9863C83.0609 91.511 82.5731 91.9555 82.0761 92.3938C77.3963 96.4957 72.7041 100.585 68.0459 104.709C66.3203 106.252 66.1628 108.465 67.5643 110.061C68.9658 111.657 71.1298 111.771 72.9264 110.268C73.7135 109.607 74.4699 108.916 75.2478 108.237L88.5433 96.5791C89.1144 97.218 89.6299 97.7797 90.1331 98.3538C94.069 102.838 97.974 107.351 101.965 111.783C102.679 112.57 103.586 113.157 104.596 113.487C106.068 113.928 107.611 113.067 108.383 111.74C109.229 110.286 109.084 108.737 107.852 107.326C103.327 102.138 98.7735 96.968 94.1431 91.6901C94.6339 91.2364 95.0691 90.8166 95.5291 90.4184C100.16 86.3443 104.833 82.3041 109.42 78.1713C110.199 77.4503 110.763 76.5286 111.05 75.5077C111.449 74.0169 110.544 72.5107 109.198 71.7792C107.723 70.9829 106.25 71.1773 104.799 72.4459C99.6533 76.9521 94.5166 81.4676 89.2379 86.0943Z"
              fill="white"
            />
            <path
              d="M89.2379 86.0943C94.5166 81.4645 99.6533 76.9521 104.805 72.4551C106.256 71.1866 107.729 70.9921 109.204 71.7884C110.553 72.5199 111.458 74.0261 111.057 75.5169C110.769 76.5378 110.205 77.4596 109.427 78.1805C104.843 82.3133 100.166 86.3535 95.5353 90.4277C95.0784 90.8258 94.6401 91.2456 94.1493 91.6993C98.7797 96.9679 103.321 102.138 107.846 107.326C109.081 108.737 109.223 110.286 108.377 111.74C107.605 113.067 106.062 113.928 104.589 113.487C103.579 113.157 102.673 112.57 101.959 111.783C97.9678 107.351 94.0628 102.832 90.1269 98.3538C89.6238 97.7797 89.1082 97.2179 88.5371 96.579L75.2416 108.237C74.4699 108.916 73.6981 109.607 72.9202 110.268C71.1236 111.771 68.9843 111.681 67.5582 110.061C66.132 108.44 66.3234 106.237 68.0397 104.709C72.6979 100.585 77.3901 96.4957 82.07 92.3938C82.567 91.9555 83.0547 91.511 83.6412 90.9863L76.3838 82.7053C74.2816 80.3071 72.167 77.9213 70.0802 75.5107C68.4503 73.6311 68.4842 71.5199 70.1296 70.0322C71.7749 68.5445 74.0253 68.7976 75.6861 70.6896C79.4913 75.0107 83.2924 79.339 87.0894 83.6745C87.7716 84.443 88.4538 85.2084 89.2379 86.0943Z"
              fill="#555555"
            />
          </g>
          <defs>
            <clipPath id="clip0_108_0">
              <rect width="158" height="158" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <p className="text-center">
        We could not find weather information for the location above
      </p>
    </div>
  );
};

export default WeatherModuleNotFound;
