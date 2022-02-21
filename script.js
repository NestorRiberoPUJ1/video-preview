function previewVideo(element)
{
    element.muted=true;
    element.play();
}
function stopPreviewVideo(element)
{
    element.muted=false;
    element.pause();
}