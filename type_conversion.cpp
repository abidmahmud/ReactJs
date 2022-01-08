#include <iostream>
#include <windows.h>
using namespace std;

int main()
{
    int x = 60, whenToStop = 500, j = 0;

    while (1)
    {
        Sleep(1000 * x);
        j++;
        if (j == whenToStop)
            break;
        mouse_event(MOUSEEVENTF_WHEEL, 0, 0, 20 * 10, 0);
    }
}